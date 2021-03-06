import Link from 'next/link';

import Section from '../../components/common/section';

const Updates = () => (
  <Section>
    <div className="wrapper">
      <h1>News</h1>
      <strong>Date and Venue</strong>
      <p>Join us on 18-20 April 2018 in Cluj Napoca, Romania at Grand Hotel Italia for 1 day of workshops and 2 days of conference. Feel free to send us your suggestions over <a href="https://twitter.com/jsheroes" target="_blank" rel="noreferrer noopener">Twitter</a>, we’d be happy to hear from you.</p>
      <strong>Speakers</strong>
      <p>Call for Papers is still open! <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPSo4Zy_M78PHRVFz90v1_SV3IqRcyhvgK2oCDY6ju6NDWeA/viewform?usp=sf_link" target="_blank" rel="noreferrer noopener">Submit your proposals</a> until the 30th of December!</p>
      <strong>Sponsors</strong>
      <p>Our Call for Sponsors is always open. Send us an email if you’re interested to join our mission in 2018 at <a href="maito:welcome@jsheroes.io">welcome@jsheroes.io</a> and we’ll take it from there.</p>
      <strong>Wanted</strong>
      <p>Passionate community members: Join the JSHeroes organizing crew! Get in touch and let us know what you’d like to contribute with.</p>
      <strong>Tickets</strong>
      <p>If PayPal is not your preferred payment method, you can also pay by invoice. Drop us a line at <a href="maito:contact@jsheroes.io">contact@jsheroes.io</a> with your request, we’d be happy to help.</p>
    </div>

    <style jsx>{`
        ul li {
          list-style-type: none;
          margin: 15px 0;
        }
        .wrapper {
          margin: 100px auto;
          text-align: center;
          max-width: 900px;
        }
        .wrapper p {
          margin-bottom: 20px;
        }
        .wrapper a {
          font-weight: bold;
        }
        h1 {
          margin: 20px 0;
          color: #0098ff;
        }
      `}</style>
  </Section>
);

export default Updates;
