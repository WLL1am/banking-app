import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'User', lastName: 'Last', email: 'email@gmail.com' }

    return (
        <section className='home'>
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={12345.67}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.45 }, { currentBalance: 678.90 }]}
            />
        </section>
    )
}

export default Home