import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>About Me</h3>
          <p>
          I have been intrigued in the software development side for years and decided to take action by attending DevMountain to further my skills. I have strong passion in problem solving & learning. I'm always looking for ways to overcome and push myself to be a better developer. On my off time, I enjoy traveling and hikes through national parks around the U.S. with my wife.
          </p>

          <hr />

          <h4>Feugiat aliquam</h4>
          <p>
            Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec
            varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia
            tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
            tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean
            erat diam, tempus aliquet erat.
          </p>

          <p>
            Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus
            rutrum cursus velit, eget condimentum nunc blandit vel. In at
            pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
            fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra
            commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim
            vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
            pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum.
            Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
