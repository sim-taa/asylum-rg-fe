import { Button, Space } from 'antd';
import React from 'react';

export function FooterContent() {
  return (
    <div>
      <div>
        {/*minified 'nav bar' for footer*/}
        <div>About Us Contact Press Terms & Privacy Sign Up Careers</div>
        {/*contact info*/}
        <div>
          New York Washington Los Angeles
          <br />
          Human Rights First, 75 Broad St, 31st Floor, New York, NY 10004
        </div>
        {/*media contact*/}
        <div>For Media Inquiries call 202-370-3323</div>
        {/*legal info*/}
        <div>
          Human Rights First is a nonpartisan, 501(c)(3), international human
          rights organization based in New York and Washington, DC. We do not
          favor or oppose any candidate for public office.
        </div>
      </div>
      <div>
        {/*logo*/}
        <div></div>
        {/*buttons*/}
        <div>
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}
