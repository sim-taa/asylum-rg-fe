import { Button, Space, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

export function FooterContent() {
  return (
    <Space
      className="footer-container"
      direction="horizontal"
      // size='middle'
      // style={{
      //     display: 'flex',
      // }}
    >
      <Space direction="vertical">
        {/*minified 'nav bar' for footer*/}
        <Space direction="horizontal">
          <Button type="text" size="small">
            About Us
          </Button>
          <Button type="text" size="small">
            Contact Us
          </Button>
          <Button type="text" size="small">
            Press
          </Button>
          <Button type="text" size="small">
            Terms & Privacy
          </Button>
          <Button type="text" size="small">
            Sign Up
          </Button>
          <Button type="text" size="small">
            Careers
          </Button>
        </Space>
        {/*contact info*/}
        <Text>
          New York Washington Los Angeles
          <br />
          Human Rights First, 75 Broad St, 31st Floor, New York, NY 10004
        </Text>
        {/*media contact*/}
        <Text>For Media Inquiries call 202-370-3323</Text>
        {/*legal info*/}
        <Text>
          Human Rights First is a nonpartisan, 501(c)(3), international human
          rights organization based in New York and Washington, DC. We do not
          favor or oppose any candidate for public office.
        </Text>
      </Space>
      <div>
        {/*logo*/}
        <div>
          <img
            src="../../styles/Images/HRF_RGB_Brandmark_Tan.png"
            alt="Human Rights First Logo"
          />
        </div>
        {/*buttons*/}
        <Space direction="horizontal">
          <Button
            shape="round"
            href="http://www.humanrightsfirst.org/our-work/refugee-protection/probono-program"
          >
            ASYLUM
          </Button>
          <Button shape="round" href="https://www.humanrightsfirst.org/donate">
            DONATE
          </Button>
          <Button shape="round" href="https://www.humanrightsfirst.org/sign-up">
            SIGN UP
          </Button>
        </Space>
      </div>
    </Space>
  );
}
