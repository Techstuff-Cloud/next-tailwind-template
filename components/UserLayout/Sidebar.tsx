import { sidebarOptions } from './constants';
import { SidebarItem } from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='w-[268px] max-w-[268px] bg-transparent max-h-[calc(100vh_-_82px)] border-r border-r-surface-100'>
      <div className='h-full w-full p-2.5 box-border flex flex-col gap-40 justify-between  overflow-y-auto scrollbar'>
        <ul className='w-full flex flex-col gap-1.5'>
          {sidebarOptions.map((option) => (
            <SidebarItem
              key={option.id}
              iconName={option.iconName}
              label={option.label}
            />
          ))}
        </ul>

        <ul className='w-full flex flex-col gap-1.5'>
          <SidebarItem
            label='Settings'
            iconName='settings'
            onClick={() => console.log('Settings')}
          />
          <SidebarItem
            label='Logout'
            iconName='log-out'
            onClick={() => console.log('Logout')}
          />
        </ul>
      </div>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
