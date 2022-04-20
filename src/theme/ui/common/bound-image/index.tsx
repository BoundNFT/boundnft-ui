import styled from '@emotion/styled'
import { Flex, Image } from 'theme-ui'

interface IBoundImage {
  imageUrl: string
  height?: string | number
  width?: string | number
}

const BoundImage: React.FC<IBoundImage> = ({ imageUrl, height, width }) => {

  return (
    <BoundImageWrap>
      <Flex>
        <Flex className='lefthex' sx={{ alignItems: 'center', justifyContent: 'center'}}>
          <Flex className='hex hexborder'>
            <Flex className='hex hexdark'>
              <Flex className='hex hexpic'>
                <Image src={imageUrl} width={width} height={height}/>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex className='righthex'>
          <Flex className='hex hexborder'>
            <Flex className='hex hexdark'>
              <Flex className='hex hexpic'>
              <Image src={imageUrl} width={width} height={height}/>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </BoundImageWrap>

  )
}



export default BoundImage

const BoundImageWrap = styled.div`
  .lefthex {
    z-index: 2;
  }
  .righthex {
    z-index: 1;
    margin-left: -10px;
    filter: saturate(0);
    opacity: 0.4;
  }
  .hex {
    -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
  }
  .hexborder {
    width: 51px;
    height: 44px;
    background: #C0FF00;
    padding: 2px;
  }
  .hexdark {
    width: calc(51px - 4px);
    height: calc(44px - 4px);
    background: #242F3F;
    padding: 2px;
  }
  .hexpic {
    width: 100%;
    height: 100%;
  }
  .hexpic img {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }

`

