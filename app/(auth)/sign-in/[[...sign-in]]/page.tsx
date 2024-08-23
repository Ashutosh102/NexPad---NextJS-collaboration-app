/* eslint-disable @next/next/no-img-element */
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (

    <section className="dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://th.bing.com/th/id/OIG1.9dlE8qyTiUXHrGUlbNKG?pid=ImgGn"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>
            </a>
            <SignIn />
          </div>
        </main>
      </div>
    </section>


  )
}

export default SignInPage