import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps {
  userName: string;
  type?: "admin" | "student";
}
export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}

      </Box>
      {/* แสดงผู้ใช้งาน */}
      
      <Box p={10}>
        <Group>
        <Indicator
          inline
          size={16}
          offset={7}
          position="bottom-end"
          color="red"
          withBorder
        >
          <Avatar
            size="lg"
            radius="xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUIPiY0lM9UG4luby00SUa6J3oENV1wBM8Q&s"
          />
        </Indicator>
        <Text>User : TongTong : Student</Text>
        </Group>
      </Box>
    </Stack>
  );
}
