import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './BasicTabs.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="tab-container" sx={{ width: '100%' }}>
      <Box >
        <Tabs className="tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  className="tab-box" label={<><span className="tab-number">01</span> High Resolution Chirp Sounder</>} {...a11yProps(0)} />
          <Tab  className="tab-box" label={<><span className="tab-number">02</span> 120° side to side coverage</>} {...a11yProps(1)} />
          <Tab  className="tab-box" label={<><span className="tab-number">03</span> Realtime CDX Mapping</>} {...a11yProps(2)} />
          <Tab  className="tab-box" label={<><span className="tab-number">04</span> Realtime 3D View CDX</>} {...a11yProps(3)} />
          <Tab  className="tab-box" label={<><span className="tab-number">05</span> Backscatter license</>} {...a11yProps(4)} />
          <Tab  className="tab-box" label={<><span className="tab-number">06</span> High Resolution Side Scan</>} {...a11yProps(5)} />
          <Tab  className="tab-box" label={<><span className="tab-number">07</span> Third-Party Software Integration</>} {...a11yProps(6)} />
          <Tab  className="tab-box" label={<><span className="tab-number">08</span> Multiple WASSP Transducers</>} {...a11yProps(7)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>01</p>
          </div>
          <div>
        <h1>High Resolution Chirp Sounder</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>02</p>
          </div>
          <div>
        <h1>120° side to side coverage</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>03</p>
          </div>
          <div>
        <h1>Realtime CDX Mapping</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>04</p>
          </div>
          <div>
        <h1>Realtime 3D View CDX</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>05</p>
          </div>
          <div>
        <h1>Backscatter license</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>06</p>
          </div>
          <div>
        <h1>High Resolution Side Scan</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>07</p>
          </div>
          <div>
        <h1>Third-Party Software Integration</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
      <div className='tab-heading'>
          <div className='tab-heading-number'>
            <p>08</p>
          </div>
          <div>
        <h1>Multiple WASSP Transducers</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. </p>
        </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}