import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'


const LeftMenu: React.FC = (): React.ReactElement => {
	const [loading, setLoading] = useState<boolean>(true)
	const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false)

	const toggleSubMenuVisible = (): void => setSubMenuVisible(!subMenuVisible)

	useEffect(() => {
		setLoading(false)
	}, [])

	return (
		<>
			{loading ? null : <ReactTooltip id="svgTooltip" className="tooltip" backgroundColor="white" textColor="#212121" />}
			
			<div className="menu menu-left">
				<svg data-tip="Выбрать" data-for="svgTooltip" width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.0538 17.9991H10.4181L13.3841 25.4362C13.5907 25.9518 13.3546 26.5299 12.8824 26.7486L10.2705 27.9204C9.7836 28.1392 9.23759 27.8892 9.03098 27.3892L6.21254 20.327L1.60852 25.2018C0.994978 25.8513 0 25.3506 0 24.4987V1.00071C0 0.103837 1.0583 -0.333389 1.60847 0.29765L16.7178 16.296C17.3273 16.9074 16.8776 17.9991 16.0538 17.9991Z" fill="#212121" />
				</svg>

				<svg data-tip="Стержень" data-for="svgTooltip" width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="2" width="4" height="32" rx="2" transform="rotate(-30 0 2)" fill="#212121" />
				</svg>

				<svg data-tip="Узел" data-for="svgTooltip" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="3" y="3" width="4" height="28" rx="2" fill="#212121"/>
					<rect x="3" y="7" width="4" height="28" rx="2" transform="rotate(-90 3 7)" fill="#212121"/>
					<circle cx="5" cy="5" r="5" fill="#212121" />
				</svg>
				
				<svg onClick={() => toggleSubMenuVisible()} className={subMenuVisible ? 'active' : undefined} data-tip="Опора" data-for="svgTooltip" width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="13.0027" y="2.28128" width="4" height="28" rx="2" transform="rotate(-25 13.0027 2.28128)" fill="#212121"/>
					<rect x="6.62817" y="27.6579" width="4" height="28" rx="2" transform="rotate(-155 6.62817 27.6579)" fill="#212121"/>
					<rect y="28" width="4" height="32" rx="2" transform="rotate(-90 0 28)" fill="#212121"/>
					<circle cx="16" cy="5" r="5" fill="#212121"/>
				</svg>

				<svg data-tip="Сила" data-for="svgTooltip" width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.54301 19.6213V0.749999C9.54301 0.335812 9.20143 0 8.78012 0H5.21994C4.79864 0 4.45705 0.335812 4.45705 0.749999V19.6213H1.52887C0.169518 19.6213 -0.511239 21.237 0.449945 22.182L5.92111 27.5606C6.51699 28.1465 7.48307 28.1465 8.07889 27.5606L13.5501 22.182C14.5112 21.237 13.8305 19.6213 12.4711 19.6213H9.54301Z" fill="#212121" />
				</svg>

				<svg data-tip="Нагрузка" data-for="svgTooltip" width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="22" width="4" height="32" rx="2" transform="rotate(-90 0 22)" fill="#212121"/>
					<rect y="4" width="4" height="32" rx="2" transform="rotate(-90 0 4)" fill="#212121"/>
					<path d="M17.4532 13.2122V2.42857C17.4532 2.19189 17.258 2 17.0172 2H14.9828C14.7421 2 14.5469 2.19189 14.5469 2.42857V13.2122H12.8736C12.0969 13.2122 11.7079 14.1354 12.2571 14.6754L15.3835 17.7489C15.724 18.0837 16.276 18.0837 16.6165 17.7489L19.7429 14.6754C20.2921 14.1354 19.9031 13.2122 19.1264 13.2122H17.4532Z" fill="#212121"/>
					<path d="M5.45315 13.2122V2.42857C5.45315 2.19189 5.25796 2 5.01721 2H2.98283C2.74208 2 2.54689 2.19189 2.54689 2.42857V13.2122H0.873639C0.0968672 13.2122 -0.292137 14.1354 0.257111 14.6754L3.38349 17.7489C3.724 18.0837 4.27604 18.0837 4.61651 17.7489L7.74289 14.6754C8.29214 14.1354 7.90313 13.2122 7.12636 13.2122H5.45315Z" fill="#212121"/>
					<path d="M29.4532 13.2122V2.42857C29.4532 2.19189 29.258 2 29.0172 2H26.9828C26.7421 2 26.5469 2.19189 26.5469 2.42857V13.2122H24.8736C24.0969 13.2122 23.7079 14.1354 24.2571 14.6754L27.3835 17.7489C27.724 18.0837 28.276 18.0837 28.6165 17.7489L31.7429 14.6754C32.2921 14.1354 31.9031 13.2122 31.1264 13.2122H29.4532Z" fill="#212121"/>
				</svg>

			</div>

			<div className={`menu menu-left sub ${subMenuVisible ? 'visible' : ''}`}>
				<svg data-tip="Неподвижная шарнирная опора" data-for="svgTooltip" width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="13.0027" y="2.28128" width="4" height="28" rx="2" transform="rotate(-25 13.0027 2.28128)" fill="#212121"/>
					<rect x="6.62817" y="27.6579" width="4" height="28" rx="2" transform="rotate(-155 6.62817 27.6579)" fill="#212121"/>
					<rect y="28" width="4" height="32" rx="2" transform="rotate(-90 0 28)" fill="#212121"/>
					<circle cx="16" cy="5" r="5" fill="#212121"/>
				</svg>
				
				<svg data-tip="Подвижная шарнирная опора" data-for="svgTooltip" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="14" width="4" height="28" rx="2" fill="#212121"/>
					<rect y="28" width="4" height="32" rx="2" transform="rotate(-90 0 28)" fill="#212121"/>
					<circle cx="16" cy="5" r="5" fill="#212121"/>
					<circle cx="16" cy="26" r="5" fill="#212121"/>
				</svg>
				
				<svg data-tip="Жесткая заделка" width="29" data-for="svgTooltip" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="1" y="16" width="4" height="28" rx="2" transform="rotate(-90 1 16)" fill="#212121"/>
					<rect width="4" height="28" rx="2" fill="#212121"/>
				</svg>
			</div>
		</>
	)
}


export default LeftMenu
