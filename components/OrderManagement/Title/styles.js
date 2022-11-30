import css from 'styled-jsx/css'

export default css`
  .title-page {
    background-image: url(/banner.png);
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .container {
    width: 100%;
    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    padding-right: 15px;
    padding-left: 15px;

    margin-right: auto;
    margin-left: auto;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    margin-right: -15px;
    margin-left: -15px;
  }

  .col-md-6 {
    position: relative;
    width: 100%;

    padding-right: 15px;
    padding-left: 15px;
  }

  .inner-title-page {
    padding-top: 100px;
    padding-bottom: 100px;

    h1 {
      font-size: 40px;
      font-weight: 500;
      line-height: 1;
      font-family: 'El Messiri', sans-serif;
      color: white;

      margin-top: 0;
      margin-bottom: 30px;

      display: inline-block;
      position: relative;
    }

    h1:before {
      content: ' ';
      position: absolute;
      height: 13px;
      width: 110px;
      display: block;
      left: 0;
      bottom: -10px;
      background: white;
      -webkit-mask: url(/images/line-title2.svg) repeat left center;
      mask: url(/images/line-title2.svg) repeat left center;
    }

    .breadscrum {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 15px;
      margin-bottom: 1rem;

      a {
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        text-decoration: none;
        color: #c2c2c2;
      }

      .current {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
`
