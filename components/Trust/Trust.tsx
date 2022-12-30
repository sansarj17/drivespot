/* eslint-disable react/no-unescaped-entities */

import StatSolo from "./StatSolo";


export default function Trust() {
  return <>
	<div className="trustWrapper bg-white px-10 pt-10 mb-10">
		<h2 className="font-inter text-3xl font-bold text-center">Trusted and loved by the world's best teams</h2>
		<div className="companies">

		</div>
		<div className="opusStats">
			<StatSolo lead="99.95%" subLead="Accuracy rate" subText="in fulfilling orders" />
			<StatSolo lead="5,000+" subLead="Ecommerce businesses" subText="partner with opus" />
			<StatSolo lead="99.96%" subLead="Of orders ship on time" subText="within SLA" />
			<StatSolo lead="#1" subLead="Best Fulfllment Technology" subText="by AdWeek's Retail Awards"/>
		</div>
	</div>
  </>
}

