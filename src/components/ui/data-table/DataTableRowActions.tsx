"use client"

import { Button } from "@/components/Button"
import { RiMoreFill } from "@remixicon/react"
import { Row } from "@tanstack/react-table"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Badge } from "@/components/Badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"
import { RiFileLine } from "@remixicon/react"
import {
    Drawer,
    DrawerBody,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/Drawer"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<
    TData,
>({ }: DataTableRowActionsProps<TData>) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="group aspect-square p-1.5 hover:border hover:border-gray-300 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:dark:border-gray-700 data-[state=open]:dark:border-gray-700 data-[state=open]:dark:bg-gray-900"
                >
                    <RiMoreFill
                        className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-data-[state=open]:text-gray-700 group-hover:dark:text-gray-300 group-data-[state=open]:dark:text-gray-300"
                        aria-hidden="true"
                    />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-lg">
                <DrawerHeader className="w-full">
                    <DrawerTitle className="flex items-center w-full justify-between">
                        <span>[Merchant]</span>
                        <span>[Amount]</span>
                    </DrawerTitle>
                    <div className="mt-1 flex items-center justify-between">
                        <span className="text-left text-sm text-gray-500 dark:text-gray-500">[Jul 10, 2024 at 1:28PM]</span>
                        <Badge variant="success">submitted</Badge>
                    </div>
                </DrawerHeader>
                <DrawerBody>
                    <Tabs defaultValue="details" className="mt-1">
                        <TabsList>
                            <TabsTrigger value="details" className="px-5">Details</TabsTrigger>
                            <TabsTrigger value="accounting" className="px-5">Accounting</TabsTrigger>
                            <TabsTrigger value="activity" className="px-5">Activity</TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="details"
                            className="space-y-4"
                        >
                            <div className="mt-6">
                                <Label className="font-medium">Upload receipt</Label>
                                <div className="mt-2 h-36 flex items-center justify-center border border-dashed rounded-lg border-gray-300 dark:border-gray-700">
                                    <div>
                                        <RiFileLine
                                            className="mx-auto size-9 text-gray-400 dark:text-gray-600"
                                            aria-hidden={true}
                                        />
                                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Click to browse or drag receipt here</p>
                                        <p className="text-xs text-center text-gray-500 dark:text-gray-500">PDF, JPG, PNG, XML</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Label className="font-medium" htmlFor="category">Category</Label>
                                <Select defaultValue="value1">
                                    <SelectTrigger id="category" className="mt-2">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="value1">
                                            [Telephony]
                                        </SelectItem>
                                        <SelectItem value="value2">
                                            [Software (recurring)]
                                        </SelectItem>
                                        <SelectItem value="value3">
                                            [Groceries]
                                        </SelectItem>
                                        <SelectItem value="value4">
                                            [Restaurant]
                                        </SelectItem>
                                        <SelectItem value="value5">
                                            [Furniture]
                                        </SelectItem>
                                        <SelectItem value="value6">
                                            [Coffee shop]
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label className="font-medium" htmlFor="memo">Memo</Label>
                                {/* @SEV: is type="text" already default? */}
                                <Input
                                    id="memo"
                                    name="memo"
                                    type="text"
                                    placeholder="Describe the business purpose for this expense"
                                    className="mt-2"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="Accounting"
                        >
                            Accounting
                        </TabsContent>
                        <TabsContent
                            value="Activity"
                        >
                            Activity
                        </TabsContent>
                    </Tabs>
                </DrawerBody>
                <DrawerFooter className="flex items-center gap-2">
                    <DrawerClose>
                        <Button variant="secondary" className="w-full">Dispute</Button>
                    </DrawerClose>
                    <DrawerClose>
                        <Button className="w-full">Submit</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}