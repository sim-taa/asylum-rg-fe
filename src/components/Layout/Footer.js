import { Button, Space, Typography, Layout, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/Images/WhiteLogo.png';
const { Text } = Typography;

export function FooterContent() {
  const { Footer } = Layout;
  return (
    <div>
      <Footer
        style={{
          backgroundColor: '#473D3D',
          color: '#E2F0F7',
        }}
      >
        {/*logo*/}
        <div>
          <Image width={100} src={Logo} />
        </div>
        <Space className="footer-container" direction="horizontal">
          <Space direction="vertical">
            {/*contact info*/}
            <Text style={{ color: '#E2F0F7' }}>
              Human Rights First
              <br />
              75 Broad St, 31st Floor, New York,
              <br />
              New York, New York 10004 US
            </Text>
            {/*media contact*/}
            <Text style={{ color: '#E2F0F7' }}>
              For Media Inquiries call 202-370-3323
            </Text>
            {/*legal info*/}
            {/* <Text style={{ color: '#E2F0F7' }}>
              Human Rights First is a nonpartisan, 501(c)(3), international
              human rights organization based in New York and Washington, DC. We
              do not favor or oppose any candidate for public office.
            </Text> */}
          </Space>
          {/* {  <div>
           
          <Space direction="horizontal">
            <Button
              shape="round"
              href="http://www.humanrightsfirst.org/our-work/refugee-protection/probono-program"
              >
              ASYLUM
            </Button>
            <Button
              shape="round"
              href="https://www.humanrightsfirst.org/donate"
              >
              DONATE
            </Button>
            <Button
              shape="round"
              href="https://www.humanrightsfirst.org/sign-up"
              >
              SIGN UP
            </Button>
          </Space>
          
        </div>} */}
        </Space>
      </Footer>
      <Footer style={{ backgroundColor: '#403737' }}>
        {/*minified 'nav bar' for footer*/}
        <Space direction="horizontal">
          <Button
            type="text"
            size="small"
            href="https://www.humanrightsfirst.org/about"
            style={{ color: '#E2F0F7' }}
          >
            About Us
          </Button>
          <Button
            type="text"
            size="small"
            href="https://www.humanrightsfirst.org/about/contact"
            style={{ color: '#E2F0F7' }}
          >
            Contact Us
          </Button>
          <Button
            type="text"
            size="small"
            href="https://www.humanrightsfirst.org/press"
            style={{ color: '#E2F0F7' }}
          >
            Press
          </Button>
          <Button
            type="text"
            size="small"
            href="https://www.humanrightsfirst.org/about/privacy-policy"
            style={{ color: '#E2F0F7' }}
          >
            Terms & Privacy
          </Button>
          <Button
            type="text"
            size="small"
            href="https://www.humanrightsfirst.org/sign-up"
            style={{ color: '#E2F0F7' }}
          >
            Sign Up
          </Button>
          <Button
            type="text"
            size="small"
            href="http://www.humanrightsfirst.org/careers"
            style={{ color: '#E2F0F7' }}
          >
            Careers
          </Button>
        </Space>
      </Footer>
    </div>
  );
}
