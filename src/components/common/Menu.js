import { Menu } from 'antd';
import React from 'react';
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <a href="/about" title="About">
      About
    </a>,
    'ab',
    [
      getItem(
        <a href="/about" title="">
          About Us
        </a>,
        'ab1'
      ),
      getItem(
        <a href="/about/staff" title="">
          Leadership & Staff
        </a>,
        'ab2'
      ),
      getItem(
        <a href="/about/board-of-directors" title="">
          Boards
        </a>,
        'ab3'
      ),
      getItem(
        <a href="/topics/coalitions" title="">
          Coalitions
        </a>,
        'ab4'
      ),
      getItem(
        <a href="/about/annual-reports-financials" title="">
          Annual Reports & Financials
        </a>,
        'ab5'
      ),
      getItem(
        <a href="/about/events" title="">
          Events
        </a>,
        'ab6'
      ),
      getItem(
        <a href="http://www.humanrightsfirst.org/careers" title="">
          Careers
        </a>,
        'ab7'
      ),
      getItem(
        <a href="/about/contact" title="">
          Contact
        </a>,
        'ab8'
      ),
      getItem(
        <a
          href="http://www.humanrightsfirst.org/our-work/refugee-protection/probono-program"
          title=""
        >
          Seeking Asylum?
        </a>,
        'ab9'
      ),
    ]
  ),
  getItem(<span title="Campaigns">Campaigns</span>, 'camp', [
    getItem(
      <a href="/campaigns/2021-policy-blueprint" title="">
        2021 Policy Blueprints
      </a>
    ),
    getItem(
      <a href="/campaigns/freedom-for-detained-refugees-project" title="">
        Freedom for Detained Refugees
      </a>
    ),
    getItem(
      <a href="/campaigns/never-torture" title="">
        Never Torture
      </a>
    ),
    getItem(
      <a href="/campaigns/refugees-renew-america" title="">
        Refugees Renew America
      </a>
    ),
    getItem(
      <a href="/campaigns/stop-refugee-ban" title="">
        Stop Trump's Muslim Refugee Ban
      </a>
    ),
    getItem(
      <a
        href="http://www.vfai.org"
        title="Veterans for American Ideals is a nonpartisan group of veterans who share the belief that America is strongest when its policies and actions match its ideals."
      >
        Veterans for American Ideals
      </a>
    ),
    getItem(
      <a href="/campaigns/close-guantanamo" title="Close Guantanamo">
        Close Guantanamo
      </a>
    ),
  ]),
  getItem(
    <a href="/topics" title="">
      Topics
    </a>,
    'top',
    [
      getItem(
        <a href="/topics/authoritarianism" title="Authoritarianism">
          Authoritarianism
        </a>,
        'top1',
        [
          getItem(
            <a href="/topics/bahrain" title="Bahrain">
              Bahrain
            </a>
          ),
          getItem(
            <a href="/topics/egypt" title="Egypt">
              Egypt
            </a>
          ),
          getItem(
            <a href="/topics/russia" title="Russia">
              Russia
            </a>
          ),
          getItem(
            <a href="/topics/global-magnitsky" title="">
              Targeted Sanctions (Global Magnitsky)
            </a>
          ),
          getItem(
            <a href="/topics/guantanamo" title="Guantanamo">
              Guantanamo
            </a>
          ),
          getItem(
            <a href="/topics/interrogators" title="Interrogators">
              Interrogators
            </a>
          ),
          getItem(
            <a href="/topics/middle-east" title="Middle East">
              Middle East
            </a>
          ),
          getItem(
            <a href="/topics/syrian-refugees" title="Syrian Refugees">
              Syrian Refugees
            </a>
          ),
          getItem(
            <a href="/topics/torture" title="Torture">
              Torture
            </a>
          ),
        ]
      ),
      getItem(
        <a href="/topics/extremism" title="Extremism">
          Extremism
        </a>,
        'top2',
        [
          getItem(
            <a href="/topics/xenophobia" title="Xenophobia">
              Xenophobia
            </a>
          ),
          getItem(
            <a
              href="/topics/antisemitism-and-extremism"
              title="Antisemitism and Extremism"
            >
              Antisemitism and Extremism
            </a>
          ),
          getItem(
            <a
              href="/topics-foreign-policy/commission-unalienable-rights-resources"
              title=""
            >
              Commission on Unalienable Rights Resources
            </a>
          ),
          getItem(
            <a href="/topics/hate-crimes" title="Hate Crimes">
              Hate Crimes
            </a>
          ),
          getItem(
            <a href="/topics/islamophobia" title="Islamophobia">
              Islamophobia
            </a>
          ),
          getItem(
            <a
              href="/topics/prosecuting-terrorism"
              title="Prosecuting Terrorism"
            >
              Prosecuting Terrorism
            </a>
          ),
        ]
      ),
      getItem(
        <a href="/topics/systemic-injustice" title="">
          Systemic Injustice
        </a>,
        'top3',
        [
          getItem(
            <a
              href="/topics/international-human-rights-law"
              title="International Human Rights Law"
            >
              International Human Rights Law
            </a>
          ),
          getItem(
            <a href="/topics/religious-freedom" title="Religious Freedom">
              Religious Freedom
            </a>
          ),
          getItem(
            <a href="/topics/targeted-killing" title="Targeted Killing">
              Targeted Killing
            </a>
          ),
          getItem(
            <a
              href="/topics/immigration-detention"
              title="Immigration Detention"
            >
              Immigration Detention
            </a>
          ),
          getItem(
            <a href="/topics/refugee-protection" title="Refugee Protection">
              Refugee Protection
            </a>
          ),
        ]
      ),
      getItem(
        <a href="/campaigns/innovation-lab-tech-for-human-rights" title="">
          The Use & Abuse of Technology
        </a>,
        'top4',
        [
          getItem(
            <a href="/resource/counter-human-rights-disinformation" title="">
              Disinformation
            </a>
          ),
          getItem(
            <a
              href="/topics/human-rights-defenders"
              title="Human Rights Defenders"
            >
              Human Rights Defenders
            </a>
          ),
          getItem(
            <a href="/resource/hold-human-rights-abusers-accountable" title="">
              Accountability
            </a>
          ),
        ]
      ),
    ]
  ),
  getItem('Resources', 'res'),
  getItem('Media', 'med'),
  getItem('Initiatives', 'init'),
  //   getItem('Navigation One', 'sub1', <MailOutlined />, [
  //     getItem(
  //       'Item 1',
  //       'g1',
  //       null,
  //       [getItem('Option 1', '1'), getItem('Option 2', '2')],
  //       'group'
  //     ),
  //     getItem(
  //       'Item 2',
  //       'g2',
  //       null,
  //       [getItem('Option 3', '3'), getItem('Option 4', '4')],
  //       'group'
  //     ),
  //   ]),
  //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //     getItem('Option 5', '5'),
  //     getItem('Option 6', '6'),
  //     getItem('Submenu', 'sub3', null, [
  //       getItem('Option 7', '7'),
  //       getItem('Option 8', '8'),
  //     ]),
  //   ]),
  //   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //     getItem('Option 9', '9'),
  //     getItem('Option 10', '10'),
  //     getItem('Option 11', '11'),
  //     getItem('Option 12', '12'),
  //   ]),
];
const App = () => {
  const onClick = e => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;
