import { MantineProvider } from "@mantine/core";

export function GlobalProvider ({children}:{children:React.ReactNode}){

return (
    <MantineProvider>
        {children}
    </MantineProvider>
)
}