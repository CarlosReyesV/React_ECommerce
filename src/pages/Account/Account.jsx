import { useContext, useRef, useState } from 'react'
import { ShoppingCartContext } from '../../Context/context'

function Account() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = () => {
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
  }

  /* Actual user view */
  const renderUserInfo = () => {
    return (
      <div>
        <div className='text-center dark:text-zinc-50 mb-4'>
          <h2>Your Profile</h2>
        </div>
        <div className="flex justify-center">
          <div className="col-lg-5">
            <div className="bg-zinc-50 shadow-xl p-10 flex flex-col gap-4 text-sm dark:bg-zinc-900">
              <div className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50">
                <label>Name: </label>
                <span className='pr-2' > {parsedAccount?.name}</span>
              </div>
              <div className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50">
                <label>Email: </label>
                <span className='underline'> {parsedAccount?.email}</span>
              </div>
              <div>
                <button 
                  className="bg-zinc-600 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-zinc-500"
                  onClick={() => setView('edit-user-info')}
                >Edit info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* Edit view */
  const renderEditUserInfo = () => {
    return (
      <div>
        <div className='text-center dark:text-zinc-50 mb-4'>
          <h2>Edit your info</h2>
          <span>Once you update a field, it cannot be restored</span>
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
                  placeholder=""
                  defaultValue={parsedAccount?.name}
                />
              </div>
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50" >Email: </label>
                <input 
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  defaultValue={parsedAccount?.email}
                />
              </div>
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2 dark:text-zinc-50" >Password: </label>
                <input 
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-2 py-2" 
                  type="password"
                  id="password"
                  name="password"
                  placeholder=""
                  defaultValue={parsedAccount?.password}
                />
              </div>
              <div>
                <button 
                  className="bg-zinc-600 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-zinc-500 mt-3"
                  onClick={() => editAccount()}
                >Confirm changes</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

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

export default Account
