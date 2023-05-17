import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import logo from '../../../public/images/quiz-logo.png'
import avatar from '../../../public/images/avatar-1.jpg'

// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header({logout}) {

  return (
    <div>
          <div className="mx-auto max-w-4xl">
            <div className="flex h-20 my-5 items-center justify-between">
              <div className="">
              <img
                     className="block h-16 w-auto"
                     src={logo}
                     alt="Your Company"
                   />
              </div>
                <div className="flex">
                <h1 className="mb-4 text-3xl lg:text-1xl font-extrabold text-secondary-100 dark:text-white">Fantasy Quiz</h1>
              </div>
              <div className="">
              
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-100">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-16 w-16 rounded-full"
                        src={avatar}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={logout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-start')}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Header