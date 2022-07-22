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
        <div>About Us Contact Press Terms & Privacy Sign Up Careers</div>
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
          <Button>ASYLUM</Button>
          <Button>DONATE</Button>
          <Button>SIGN UP</Button>
        </Space>
      </div>
    </Space>
  );
}
