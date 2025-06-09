import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-white.png'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: '0px' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 170 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            />
        </div>
    )
}

export default Logo
