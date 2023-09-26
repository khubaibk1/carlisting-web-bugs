import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const data = [
    {
        id: 1,
        name: "Best Match",
    },
    {
        id: 2,
        name: "Price: (low to high)",
    },
    {
        id: 3,
        name: "Price: (high to low)",
    },
    {
        id: 4,
        name: "Nearest Location",
    },
    {
        id: 5,
        name: "Mileage: (lowest first)",
    },
    {
        id: 6,
        name: "Age: (new to old)",
    },
    {
        id: 7,
        name: "Age: (old to new)",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Sort = () => {
    const [selected, setSelected] = useState(data[0]);
    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                <div className="flex items-center justify-center gap-6 md:gap-8 ">
                    <div className="flex items-center gap-3 ">
                        <Listbox value={selected} onChange={setSelected} >
                            {({ open }) => (
                                <>
                                    <Listbox.Label className="block text-left text-[16px] font-[400] leading-6 ">
                                        Sorted by:
                                    </Listbox.Label>
                                    <div className="relative ">
                                        <Listbox.Button className={`w-[213px] h-[36px] border-2 rounded-full  ${ open ? "border-[#09A122]" :!selected? "":selected ? "" : "border-blue-500"}`}>
                                            <span className="flex items-center  ">

                                                <span className="ml-3 block truncate">
                                                    {selected.name}
                                                </span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path d="M6.38886 7.51891C6.18873 7.7665 5.81127 7.7665 5.61114 7.51891L0.596021 1.31431C0.331734 0.987339 0.564452 0.5 0.984878 0.5L11.0151 0.5C11.4355 0.5 11.6683 0.987339 11.404 1.31431L6.38886 7.51891Z" fill="#505057" />
                                                </svg>
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >

                                            <Listbox.Options className="absolute py-2 px-2 z-10 mt-1 w-[280px]  bg-white border rounded-[20px] text-base shadow-lg   focus:outline-none sm:text-sm">
                                                <p className="text-left text-[20px] font-[600] p-4 border-b">Sort by</p>

                                                {data.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active
                                                                    ? " rounded-md  "
                                                                    : "",
                                                                "relative cursor-default select-none "
                                                            )
                                                        }
                                                        value={person}
                                                    >

                                                        {({ selected, active }) => (
                                                            <>

                                                                <div className="flex items-center justify-between cursor-pointer border-b w-full">
                                                                    <span
                                                                        className={classNames(
                                                                            selected
                                                                                ? "font-[400]"
                                                                                : "font-normal",
                                                                            " block truncate text-[16px] px-5 py-4"
                                                                        )}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    <div>
                                                                        <input type="radio" className="w-[20px] h-[20px] mr-5" />
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sort;
