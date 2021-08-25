import { Aside, Header, Menu, MenuItem, Text } from "./Sidebar.styles"
import {menuConfig} from '../../menu';


export default function Sidebar() {
    return (
        <Aside>
            <Header />
            <Menu>
                {menuConfig.map(({ name, icon }) => <MenuItem key={name}>
                    {icon}
                    <Text>{name}</Text>
                </MenuItem>)}
            </Menu>
        </Aside>
    )
}
