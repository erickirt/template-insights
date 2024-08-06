import { siteConfig } from "@/app/siteConfig"
import { Button } from "@/components/Button"
import {
    Drawer,
    DrawerBody,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/Drawer"
import { cx, focusRing } from "@/lib/utils"

import {
    Table2,
    Settings2,
    BarChartBig,
    Menu
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    { name: "Reports", href: siteConfig.baseLinks.overview, icon: BarChartBig },
    { name: "Transactions", href: siteConfig.baseLinks.details, icon: Table2 },
    {
        name: "Settings",
        href: siteConfig.baseLinks.settings.audit,
        icon: Settings2,
    },
] as const


export default function MobileSidebar() {
    const pathname = usePathname()
    const isActive = (itemHref: string) => {
        if (itemHref === siteConfig.baseLinks.settings.audit) {
            return pathname.startsWith("/settings")
        }
        return pathname === itemHref || pathname.startsWith(itemHref)
    }
    return (
        <>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button
                        variant="ghost"
                        aria-label="open sidebar"
                        className="group flex items-center rounded-md p-1.5 text-sm font-medium hover:bg-gray-100 data-[state=open]:bg-gray-100 data-[state=open]:bg-gray-400/10 hover:dark:bg-gray-400/10"
                    >
                        <Menu
                            className="size-6 shrink-0"
                            aria-hidden="true"
                        />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-lg">
                    <DrawerHeader>
                        <DrawerTitle>Acme Corp.</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <nav
                            aria-label="core mobile navigation links"
                            className="flex flex-1 flex-col space-y-10"
                        >
                            <ul role="list" className="space-y-1.5">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <DrawerClose asChild>
                                            <Link
                                                href={item.href}
                                                className={cx(
                                                    isActive(item.href)
                                                        ? "text-indigo-600 dark:text-indigo-400"
                                                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                                                    "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-base font-medium transition hover:bg-gray-100 sm:text-sm hover:dark:bg-gray-900",
                                                    focusRing,
                                                )}
                                            >
                                                <item.icon
                                                    className="size-5 shrink-0"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        </DrawerClose>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}