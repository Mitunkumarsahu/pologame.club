import React, { useEffect, useState } from 'react'
import { Spin, message, Row, Col } from "antd";
import './App.css'
import axios from "axios";

const App = () => {
  const BASEURL = import.meta.env.VITE_BASEURL;
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASEURL}/imagelinkforbackup/items/`);
      const data = response?.data;
      setData(data);
    } catch (error) {
      message.error("Unable to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <div className="desktop">
        <h1>Desktop</h1>
        <p>Resize the browser window to see the effect.</p>
      </div>
      <div className="mobile">
        <img src="./switch_to_polo_button.gif" alt="Switch to Polo.Game" className="switch-gif" />
        <div className="image-container">
          <Row gutter={[0, 0]}>

            <Col span={8} className="box">
              {loading ? (
                <Spin size="large" />
              ) : (<>
                {data.length > 0 && (
                  <a href={data[0].link} target="_blank" rel="noopener noreferrer" className='box'>
                    <img
                      src={`data:image/png;base64,${data[0].image_base64}`}
                      alt="Item 1"
                      className="image"
                    />
                  </a>
                )}
              </>
              )}
            </Col>


            <Col span={8} className="box">
              <img
                src={`./100_Secure.png`}
                alt="100% secure"
                className="image"
              />
            </Col>


            <Col span={8} className="box">
              {loading ? (
                <Spin size="large" />
              ) : (<>
                {data.length > 1 && (
                  <a href={data[1].link} target="_blank" rel="noopener noreferrer" className='box'>
                    <img
                      src={`data:image/png;base64,${data[1].image_base64}`}
                      alt="Item 2"
                      className="image"
                    />
                  </a>
                )}
              </>
              )}

            </Col>
          </Row>

          <Row gutter={[0, 0]}>
            <Col span={8} className="box">
              <img
                src={`./18+.png`}
                alt="18+"
                className="image"
              />
            </Col>


            <Col span={8} className="box">
              {loading ? (
                <Spin size="large" />
              ) : (<>
                {data.length > 2 && (
                  <a href={data[2].link} target="_blank" rel="noopener noreferrer" className='box'>
                    <img
                      src={`data:image/png;base64,${data[2].image_base64}`}
                      alt="Item 3"
                      className="image"
                    />
                  </a>
                )}
              </>
              )}

            </Col>

            <Col span={8} className="box">
              <img
                src={`./DMCA.png`}
                alt="DMCA"
                className="image"
              />
            </Col>
          </Row>
        </div>
        <div className="mobile-footer">
          <img src={'./whatsapp.png'} alt="whatsapp-icon" className="circular-icon-and-tagline" />
          <img src={'./tagline.png'} alt="tagline" className="circular-icon-and-tagline" />
          <img src={'./chat-support.png'} alt="chat-support" className="circular-icon-and-tagline" />
        </div>
      </div>
    </div>
  )
}

export default App