import css from 'styled-jsx/css'

export default css`
  .elementor-section {
    background-color: transparent;
    background-image: linear-gradient(180deg, #ffffff 0%, #f8f8f8 80%);
    padding: 20px 10px 30px 10px;

    .background-overlay {
    }

    .elementor-container {
      max-width: 1200px;
      display: flex;
      margin-right: auto;
      margin-left: auto;
      position: relative;

      .elementor-row {
        display: flex;
        width: 100%;
        .elementor-row-left,
        .elementor-row-right {
          display: flex;
          position: relative;
        }

        .elementor-row-left {
          width: 35%;
          .elementor-column-wrap {
            width: 100%;

            .elementor-widget-wrap {
              padding: 20px;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
            }
          }
        }
        .elementor-row-right {
          width: 100%;
        }
      }
    }
  }
`
