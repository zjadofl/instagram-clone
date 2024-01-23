import '../css/common.css';
import '../css/sidebar.css';
import profile from '../icon/profile.jpg';
import {ReactComponent as LogoText} from '../icon/logo-text.svg';
import {ReactComponent as Home} from '../icon/home.svg';
import {ReactComponent as Search} from '../icon/search.svg';
import {ReactComponent as Explore} from '../icon/explore.svg';
import {ReactComponent as Reels} from '../icon/reels.svg';
import {ReactComponent as Message} from '../icon/message.svg';
import {ReactComponent as Alarm} from '../icon/alarm.svg';
import {ReactComponent as Post} from '../icon/post.svg';
import {ReactComponent as ThreadsIcon} from '../icon/threads-icon.svg';
import {ReactComponent as HamburgerMenu} from '../icon/hamburger-menu.svg';

function Sidebar() {
    return (
        <div>
            <div className='logo'><LogoText /></div>
            <div>
                <ul>
                    <li>
                        <Home className='nav-icon'/>
                        <span className='nav-text'>홈</span>
                    </li>
                    <li>
                        <Search className='nav-icon'/>
                        <span className='nav-text'>검색</span>
                    </li>
                    <li>
                        <Explore className='nav-icon' />
                        <span className='nav-text'>탐색 탭</span>
                    </li>
                    <li>
                        <Reels className='nav-icon'/>
                        <span className='nav-text'>릴스</span>
                    </li>
                    <li>
                        <Message className='nav-icon'/>
                        <span className='nav-text'>메세지</span>
                    </li>
                    <li>
                        <Alarm className='nav-icon'/>
                        <span className='nav-text'>알림</span>
                    </li>
                    <li>
                        <Post className='nav-icon'/>
                        <span className='nav-text'>만들기</span>
                        </li>
                    <li>
                        <img src={profile} style={{
                            width: '24px',
                            height: '24px'
                        }}/>
                        <span className='nav-text'>프로필</span>
                    </li>
                </ul>
            </div>
            <div className='sidemenu_bottom'>
                <ul>
                    <li>
                        <ThreadsIcon className='nav-icon'/>
                        <span className='nav-text'>Threads</span>
                    </li>
                    <li>
                        <HamburgerMenu className='nav-icon'/>
                        <span className='nav-text'>더보기</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;