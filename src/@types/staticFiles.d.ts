declare module '*.svg' {
  import React from 'react'
  const content: string

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

// fonts
declare module '*.eot'
declare module '*.ttf'
declare module '*.woff'
declare module '*.woff2'
declare module '*.otf'

// images
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
