import React from 'react'


const UserIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
			<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
			<rect width="24" height="24" rx="12" fill="#C4C4C4"/>
			</mask>
			<g mask="url(#mask0)">
			<path d="M12 12C15.5508 12 18.4286 9.31406 18.4286 6C18.4286 2.68594 15.5508 0 12 0C8.44922 0 5.57143 2.68594 5.57143 6C5.57143 9.31406 8.44922 12 12 12ZM16.5 13.5H15.6613C14.5463 13.9781 13.3058 14.25 12 14.25C10.6942 14.25 9.4587 13.9781 8.33873 13.5H7.5C3.77344 13.5 0.75 16.3219 0.75 19.8V21.75C0.75 22.9922 1.8298 24 3.16071 24H20.8393C22.1702 24 23.25 22.9922 23.25 21.75V19.8C23.25 16.3219 20.2266 13.5 16.5 13.5Z" fill="#212121"/>
			</g>
		</svg>
	)
}


export default UserIcon
