import { useContext, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context/context'

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)
  const navigate = useNavigate();

  /* Account */
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  /* Has an account */
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    navigate('/')
  }
  
  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    /* Create account */
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    /* Sign in */
    handleSignIn()
  }

  /* Login view */
  const renderLogIn = () => {
    return (
      <div>
        <div className='text-center dark:text-zinc-50 mb-4'>
          <h2>Sign In</h2>
          <span>Start with your email and password.</span>
        </div>
        <div className="flex justify-center">
          <div className="col-lg-5">
            <div className="bg-zinc-50 shadow-xl p-10 flex flex-col gap-4 text-sm dark:bg-zinc-900">
              <div className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50">
                <label>Email: </label>
                {/* <span className='underline'> {parsedAccount?.email}</span> */}
                <input 
                  className="dark:text-zinc-900 border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2"
                  type="email"
                  name="email"
                  placeholder=""
                  defaultValue={parsedAccount?.email}
                />
              </div>
              <div className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50">
                <label>Password: </label>
                {/* <span className='pr-2' > {parsedAccount?.password}</span> */}
                <input 
                  className="dark:text-zinc-900 border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2"
                  type="password"
                  name="password"
                  defaultValue={parsedAccount?.password}
                />
              </div>
              <div className="flex justify-end">
                <div className="underline">
                  <NavLink className="font-bold text-zinc-600 hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-500" to="">Forgot password ?</NavLink>
                </div>
              </div>
              <div>
                <button 
                  className="bg-zinc-600 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-zinc-500"
                  onClick={() => handleSignIn()}
                  disabled={!hasUserAnAccount}
                >Log in</button>
              </div>
              <div>
                <p className="text-center dark:text-zinc-50">Or continue with</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#181196] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#251dbd]">Facebook</button>
                <button className="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#177ec4]">Twitter</button>
              </div>
              <div className="text-center underline">
                <button 
                  className="font-bold text-zinc-600 hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-500" 
                  onClick={() => setView('create-user-info')}
                  disabled={hasUserAnAccount}
                >Not account yet? Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* Sign up view */
  const renderCreateUserInfo = () => {
    return (
      <div>
        <div className='text-center dark:text-zinc-50 mb-4'>
          <h2>Sign Up</h2>
          <span>Welcome, start in with your name, email and password.</span>
        </div>
        <form ref={form} className="flex justify-center">
          <div className="col-lg-5">
            <div className="bg-zinc-50 shadow-xl p-10 flex flex-col gap-4 text-sm dark:bg-zinc-900">
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50" >Name: </label>
                <input 
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2" 
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={parsedAccount?.name}
                  placeholder=""
                />
              </div>
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50" >Email: </label>
                <input 
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2"
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={parsedAccount?.email}
                  placeholder=""
                />
              </div>
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50" >Password: </label>
                <input 
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2" 
                  type="password"
                  id="password"
                  name="password"
                  defaultValue={parsedAccount?.password}
                  placeholder=""
                />
              </div>
              <div>
                <button 
                  className="bg-zinc-600 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-zinc-500 mt-3"
                  onClick={() => createAnAccount()}
                >Create</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <>
      <div className="main-banner bg-zinc-50 dark:bg-zinc-800 pt-5" id="top">
        <section className="section border-dotted border-b-2 border-zinc-200 dark:border-zinc-800" id="products">
          <div className="container">
            <div className="row flex justify-center">
              <div className="col-lg-6">
                <div className="section-heading text-center">
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-5">
            {renderView()}
          </div>
        </section>
      </div>
    </>
  )
}

export default SignIn
