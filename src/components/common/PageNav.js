import { Pagination } from 'antd';

// dummy for now; variable determined elsewhere:
// big screen or little screen?
const bigScreen = true;

const PageNav = () => (
  <Pagination
    // mini-fied version of page nav bar
    size={'small'}
    // starting displayed page of results
    defaultCurrent={1}
    // total TBD by requested data
    total={50}
    // # of items per page responsive to device/screen size
    pageSize={bigScreen ? '40' : '15'}
    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
  />
);

export default PageNav;
