import { NextApiRequest, NextApiResponse } from 'next'
import { isArray } from 'lodash'
import axios from 'axios'
import sharp from 'sharp'

const defaultSize = 1000

export interface IImageData {
  width: number
  height: number
  isSquare: boolean
  doResize: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    if (!req.query.url) {
      return res.status(400).send('Missing URL parameter')
    }

    try {
      const url = isArray(req.query.url) ? decodeURIComponent(req.query.url[0]) : decodeURIComponent(req.query.url)
      let image = await sharp((await axios({ url, responseType: 'arraybuffer' })).data as Buffer)
      const metadata = await image.metadata()
      const imageData = getImageData(<number>metadata.width, <number>metadata.height)

      if (!imageData.isSquare) {
        image = image.extract(getExtractRegion(imageData))
      }

      if (metadata.format === 'svg') {
        res.setHeader('Content-Type', 'image/webp')
        return res.status(200).send(await image?.resize(1000, 1000).webp({ nearLossless: true, quality: 75 }))
      }

      res.setHeader('Content-Type', 'image/webp')
      return res.status(200).send(await image?.webp({ nearLossless: true, quality: 75 }))
    } catch (err) {
      console.log(err)
      return res.status(500).end()
    }
  }
  return res.status(405).end()
}

/**
 * @function getImageData
 * @param {number} width
 * @param {number} height
 * @returns {IImageData}
 */
export const getImageData = (width: number, height: number): IImageData => {
  const imageData: IImageData = {
    width,
    height,
    isSquare: width === height,
    doResize: width > defaultSize || height > defaultSize
  }

  if (imageData.doResize) {
    if (imageData.isSquare) {
      imageData.width = defaultSize
      imageData.height = defaultSize
    } else {
      if (width > height) {
        imageData.width = Math.floor((width / height) * defaultSize)
        imageData.height = defaultSize
      } else {
        imageData.width = defaultSize
        imageData.height = Math.floor((height / width) * defaultSize)
      }
    }
  }

  return imageData
}

/**
 * @function getExtractRegion
 * @param {IImageData} imageData
 * @returns {sharp.Region}
 */
export const getExtractRegion = (imageData: IImageData): sharp.Region => {
  const [width, height] = Array(2).fill(imageData.height > imageData.width ? imageData.width : imageData.height)
  let left = 0
  let top = 0

  if (imageData.height > imageData.width) {
    top = Math.floor((imageData.height - imageData.width) / 2)
  } else {
    left = Math.floor((imageData.width - imageData.height) / 2)
  }

  return {
    left,
    top,
    height,
    width
  }
}
