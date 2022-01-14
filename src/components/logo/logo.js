import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

function Logo() {
  return (<StaticImage alt="Nostalgic Logo" src="../../images/logo.png" width={103} height={40}/>)
}

export default Logo