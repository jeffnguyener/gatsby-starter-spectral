import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About</h2>
        <p>"The best way to prepare for life is begin to live"</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>About Me</h3>
          <p>
          I have been intrigued in the software development side for years and decided to take action by attending DevMountain to further my skills. I have strong passion in problem solving & learning. I'm always looking for ways to overcome and push myself to be a better developer. On my off time, I enjoy traveling and hikes through national parks around the U.S. with my wife.
          </p>

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
