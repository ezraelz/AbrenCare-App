import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="index" href="/">
          Home
        </TabTrigger>
        <TabTrigger name="profile" href="/">
          Profile
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
