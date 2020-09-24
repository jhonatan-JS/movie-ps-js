import React from 'react';
import './styles.css';

export default function FeaturedBackground() {
  return (
    <section className="featured" style= {{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/43375087-3875-4574-86c4-4c14c3473535/5ce84abf-27ef-4db8-a615-d185d1927dc0/BR-pt-20200921-popsignuptwoweeks-perspective_alpha_website_small.jpg")`
    }}>
      <div className="featured--vertical" >
        <div className="featured--horizontal" >
        </div>
      </div>
    </section>
  )
}
