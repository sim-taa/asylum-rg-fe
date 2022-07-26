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
      </a>,
      'camp1'
    ),
    getItem(
      <a href="/campaigns/freedom-for-detained-refugees-project" title="">
        Freedom for Detained Refugees
      </a>,
      'camp2'
    ),
    getItem(
      <a href="/campaigns/never-torture" title="">
        Never Torture
      </a>,
      'camp3'
    ),
    getItem(
      <a href="/campaigns/refugees-renew-america" title="">
        Refugees Renew America
      </a>,
      'camp4'
    ),
    getItem(
      <a href="/campaigns/stop-refugee-ban" title="">
        Stop Trump's Muslim Refugee Ban
      </a>,
      'camp5'
    ),
    getItem(
      <a
        href="http://www.vfai.org"
        title="Veterans for American Ideals is a nonpartisan group of veterans who share the belief that America is strongest when its policies and actions match its ideals."
      >
        Veterans for American Ideals
      </a>,
      'camp6'
    ),
    getItem(
      <a href="/campaigns/close-guantanamo" title="Close Guantanamo">
        Close Guantanamo
      </a>,
      'camp7'
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
            </a>,
            'top1a'
          ),
          getItem(
            <a href="/topics/egypt" title="Egypt">
              Egypt
            </a>,
            'top1b'
          ),
          getItem(
            <a href="/topics/russia" title="Russia">
              Russia
            </a>,
            'top1c'
          ),
          getItem(
            <a href="/topics/global-magnitsky" title="">
              Targeted Sanctions (Global Magnitsky)
            </a>,
            'top1d'
          ),
          getItem(
            <a href="/topics/guantanamo" title="Guantanamo">
              Guantanamo
            </a>,
            'top1e'
          ),
          getItem(
            <a href="/topics/interrogators" title="Interrogators">
              Interrogators
            </a>,
            'top1f'
          ),
          getItem(
            <a href="/topics/middle-east" title="Middle East">
              Middle East
            </a>,
            'top1g'
          ),
          getItem(
            <a href="/topics/syrian-refugees" title="Syrian Refugees">
              Syrian Refugees
            </a>,
            'top1h'
          ),
          getItem(
            <a href="/topics/torture" title="Torture">
              Torture
            </a>,
            'top1i'
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
            </a>,
            'top2a'
          ),
          getItem(
            <a
              href="/topics/antisemitism-and-extremism"
              title="Antisemitism and Extremism"
            >
              Antisemitism and Extremism
            </a>,
            'top2b'
          ),
          getItem(
            <a
              href="/topics-foreign-policy/commission-unalienable-rights-resources"
              title=""
            >
              Commission on Unalienable Rights Resources
            </a>,
            'top2c'
          ),
          getItem(
            <a href="/topics/hate-crimes" title="Hate Crimes">
              Hate Crimes
            </a>,
            'top2d'
          ),
          getItem(
            <a href="/topics/islamophobia" title="Islamophobia">
              Islamophobia
            </a>,
            'top2e'
          ),
          getItem(
            <a
              href="/topics/prosecuting-terrorism"
              title="Prosecuting Terrorism"
            >
              Prosecuting Terrorism
            </a>,
            'top2f'
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
            </a>,
            'top3a'
          ),
          getItem(
            <a href="/topics/religious-freedom" title="Religious Freedom">
              Religious Freedom
            </a>,
            'top3b'
          ),
          getItem(
            <a href="/topics/targeted-killing" title="Targeted Killing">
              Targeted Killing
            </a>,
            'top3c'
          ),
          getItem(
            <a
              href="/topics/immigration-detention"
              title="Immigration Detention"
            >
              Immigration Detention
            </a>,
            'top3d'
          ),
          getItem(
            <a href="/topics/refugee-protection" title="Refugee Protection">
              Refugee Protection
            </a>,
            'top3e'
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
            </a>,
            'top4a'
          ),
          getItem(
            <a
              href="/topics/human-rights-defenders"
              title="Human Rights Defenders"
            >
              Human Rights Defenders
            </a>,
            'top4b'
          ),
          getItem(
            <a href="/resource/hold-human-rights-abusers-accountable" title="">
              Accountability
            </a>,
            'top4c'
          ),
        ]
      ),
    ]
  ),
  getItem(
    <a href="/resources" title="Resources">
      Resources
    </a>,
    'res'
  ),
  getItem(
    <a href="/press" title="">
      Media
    </a>,
    'med',
    [
      getItem(
        <a href="/press" title="">
          Press Releases
        </a>,
        'med1'
      ),
      getItem(
        <a href="/about/events" title="">
          Events
        </a>,
        'med2'
      ),
      getItem(
        <a href="/blog" title="Blog">
          Blog
        </a>,
        'med3'
      ),
      getItem(
        <a href="/press/in-the-news" title="">
          In the News
        </a>,
        'med4'
      ),
    ]
  ),
  getItem(<span title="">Initiatives</span>, 'init', [
    getItem(
      <a href="/campaigns/innovation-lab-tech-for-human-rights" title="">
        Innovation Lab
      </a>,
      'init1'
    ),
    getItem(
      <a href="https://www.vfai.org" title="">
        Vets for American Ideals
      </a>,
      'init2'
    ),
  ]),
];

export default items;
