import { Font } from '@react-pdf/renderer'
import { getBasePath } from './utils'

export const registerFonts = () => {
  const basePath = getBasePath()
  
  Font.register({
    family: 'Inter',
    fonts: [
      {
        src: `${basePath}/fonts/Inter-Regular.ttf`,
        fontWeight: 'normal',
      },
      {
        src: `${basePath}/fonts/Inter-Bold.ttf`,
        fontWeight: 'bold',
      },
    ],
  })
}
