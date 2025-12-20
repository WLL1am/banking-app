import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import { getLoggedInUser } from '../../../lib/actions/user.actions'

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    return (
        <section className='home'>
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
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