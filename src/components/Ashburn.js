import React from 'react'
import { links } from '../assets/data/data'

const Ashburn = () => (
  <div>
    <h1>Ashburn</h1>
    <p>
      Ashburn Farm Marketplace
      43330 Junction Plaza Ste 134
      Ashburn, VA 20147
    </p>
    <p>
      Business Hours:
      Monday–Friday 9-7PM
      Saturday 9-6PM
      Sunday 10-5PM
    </p>
    <p>
      Phone Number:
      703-858-0101
  </p>
    <a
      href={links.yelp_ashburn.url}
      alt={links.yelp_ashburn.alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Yelp</p>
    </a>
    <a
      href={links.gmaps_ashburn.url}
      alt={links.gmaps_ashburn.alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Google Maps</p>
    </a>
    <a
      href={links.fb_ashburn.url}
      alt={links.fb_ashburn.alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Facebook</p>
    </a>
    <a
      href={links.twitter.url}
      alt={links.twitter.alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Twitter</p>
    </a>
  </div>
)

export default Ashburn
