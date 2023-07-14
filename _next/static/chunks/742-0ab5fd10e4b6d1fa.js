"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{4733:function(n,e,r){r.d(e,{Z:function(){return v}});var t=r(6042),i=r(9396),o=r(9534),a=r(7297),l=r(5893),c=r(9630),s=r(7074),u=r(917),d=r(6010),m=r(714),p=new(r.n(m)()),f=function(n){var e=p.bool();return _object_spread({label:p.word({capitalize:!0,syllables:3})},n&&e&&{subItems:p.n(function(){return f(!1)},5)})};function g(){var n=(0,a.Z)(["\n		cursor: pointer;\n		display: grid;\n		grid-template-columns: minmax(0, 1fr);\n		gap: 1rem;\n		text-align: center;\n\n		img {\n			transition: all 200ms;\n			width: 100%;\n			max-width: 7rem;\n			margin-inline: auto;\n		}\n\n		.content {\n			display: grid;\n			align-content: start;\n			grid-template-columns: 1fr;\n			gap: 0.5rem;\n\n			.ActionStack {\n				justify-content: center;\n				margin-top: 0.5rem;\n				justify-content: start;\n			}\n		}\n\n		&:hover {\n			img {\n				transform: translateY(-5px) rotate(","deg);\n			}\n		}\n	"]);return g=function(){return n},n}var h=(0,s.ZP)("a")(function(){var n="".concat(p.bool()?"":"-").concat(p.natural({min:2,max:7}));return(0,u.iv)(g(),n)}),v=function(n){var e=n.title,r=n.subtitle,a=n.description,s=n.className,u=n.image,m=(0,o.Z)(n,["title","subtitle","description","className","image"]);return(0,l.jsxs)(h,(0,i.Z)((0,t.Z)({className:(0,d.Z)("Card-root",s)},m),{children:[(0,l.jsx)("img",(0,t.Z)({},u)),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)(c.Z,{variant:"caption",children:r}),(0,l.jsx)(c.Z,{variant:"h5",children:e}),(0,l.jsx)(c.Z,{variant:"caption",children:a})]})]}))}},3537:function(n,e,r){r.d(e,{u:function(){return i}});var t=r(1953),i=(0,r(7074).ZP)(t.Z)(function(n){var e=n.size;return{display:"grid",gridTemplateColumns:"1fr",alignContent:"start",gap:({small:"1rem",medium:"2rem",large:"3rem"})[null!=e?e:"medium"]}});i.defaultProps={className:"ContentGrid-root"}},2340:function(n,e,r){r.d(e,{L:function(){return j}});var t=r(6042),i=r(9396),o=r(9534),a=r(7297),l=r(5893),c=r(2220),s=r(6010),u=r(6765),d=r(2562),m=r(696);function p(){var n=(0,a.Z)(["\n	cursor: pointer;\n	position: relative;\n	display: grid;\n	place-items: start;\n	grid-template-columns: 4.75rem 2fr;\n	gap: 1.25rem;\n\n	&::before {\n		content: '';\n		position: absolute;\n		z-index: -1;\n		top: 50%;\n		left: 50%;\n		transform: translate(-50%, -50%);\n\n		width: 0.25rem;\n		height: calc(100% + 1rem);\n		width: calc(100% + 1rem);\n		background-color: var(--color-gray-50);\n		border-radius: 0.5rem;\n\n		opacity: 0;\n	}\n\n	&:hover::before {\n		opacity: 0.5;\n	}\n"]);return p=function(){return n},n}function f(){var n=(0,a.Z)(["\n	margin: unset;\n\n	position: relative;\n	padding: 0.5rem;\n	background-color: ",";\n	border-radius: 0.5rem;\n	overflow: hidden;\n	display: flex;\n	width: 100%;\n	place-items: center;\n	place-content: center;\n"]);return f=function(){return n},n}function g(){var n=(0,a.Z)(["\n	position: relative;\n	width: 100%;\n	height: auto;\n	object-fit: contain;\n"]);return g=function(){return n},n}function h(){var n=(0,a.Z)(["\n	display: grid;\n	align-content: start;\n	grid-template-columns: 1fr;\n	grid-template-rows: auto 1fr auto;\n	gap: 0.5rem;\n\n	.ActionStack-root {\n		margin-top: 0.25rem;\n		justify-content: start;\n	}\n"]);return h=function(){return n},n}var v=c.Z.a(p()),x=c.Z.figure(f(),function(n){return n.color}),Z=c.Z.img(g()),y=c.Z.div(h()),j=function(n){var e=n.title,r=n.description,a=n.className,c=n.image,p=n.imageColor,f=(0,o.Z)(n,["title","description","className","image","imageColor"]),g=(0,u.Vi)(null!=p?p:"lightgray").alpha(.375).toHex();return(0,l.jsxs)(v,(0,i.Z)((0,t.Z)({className:(0,s.Z)("HorizontalCard-root",a)},f),{children:[(0,l.jsx)(x,{color:g,children:(0,l.jsx)(Z,(0,t.Z)({},c))}),(0,l.jsxs)(y,{children:[(0,l.jsx)(d.X,{className:"title",level:5,children:e}),(0,l.jsx)(m.x,{spacing:"small",color:"secondary",children:r})]})]}))}},1688:function(n,e,r){r.d(e,{H:function(){return nn}});var t=r(6042),i=r(9534),o=r(7297),a=r(5893),l=r(2220),c=r(8715),s=r(4124),u=r(1225),d=r(9630),m=r(6010),p=r(4944),f=r(1944),g=r(3537),h=r(2562),v=r(6651),x=r(9396),Z=r(917),y=r(5364);function j(){var n=(0,o.Z)(["\n		--background-color: #ffffff;\n		--border-color: #cbd5e1;\n\n		display: inline-flex;\n		flex-direction: row;\n		justify-content: center;\n		align-items: center;\n		padding: 10px 20px 10px ",";\n		gap: 4px;\n\n		font-weight: 600;\n		letter-spacing: -0.01rem;\n\n		border-radius: 9999px;\n		background-color: var(--background-color);\n		border: var(--button-border-primary);\n		box-shadow: var(--button-shadow-primary);\n\n		.Button-icon {\n			color: var(--color-brand-","-main);\n		}\n\n		.Button-icon {\n			display: inline-flex;\n			font-size: 24px;\n		}\n	"]);return j=function(){return n},n}var b=(0,l.Z)(function(n){var e=n.className,r=n.icon,o=n.children,l=(n.color,(0,i.Z)(n,["className","icon","children","color"]));return(0,a.jsx)(y.X,(0,x.Z)((0,t.Z)({type:"button",className:(0,m.Z)("TidBit-root",e),startIcon:r},l),{children:o}))})(function(n){var e=n.icon,r=n.color;return(0,Z.iv)(j(),e?"14px":"20px",void 0===r?"primary":r)}),w=r(4048),k=r(6706),N=r(7335),z=r(7074);function C(){var n=(0,o.Z)(["\n	--tooltip-line-height: 0.9rem;\n\n	."," {\n		background-color: #ffffff;\n		border: 1px solid rgba(0, 0, 0, 0.23);\n		color: rgba(0, 0, 0, 0.87);\n		box-shadow: var(--elevation-2);\n		display: inline-flex;\n		place-items: center;\n		place-content: center;\n		gap: 0.25em;\n\n		.Tooltip-text {\n			// light theme\n			display: inline-flex;\n			vertical-align: middle;\n			line-height: auto;\n		}\n		.Tooltip-icon {\n			display: inline-flex;\n			font-size: var(--tooltip-line-height);\n			line-height: auto;\n		}\n	}\n"]);return C=function(){return n},n}function O(){var n=(0,o.Z)(["\n	all: unset;\n\n	cursor: pointer;\n	box-sizing: border-box;\n\n	display: inline-grid;\n	grid-template-columns: 1fr;\n	place-content: center;\n	place-items: center;\n\n	aspect-ratio: 1 / 1;\n	width: 100%;\n	max-width: 15rem;\n	filter: grayscale(100%);\n	opacity: 0.5;\n	transition: all 100ms ease-in-out;\n\n	&:hover {\n		opacity: 1;\n		filter: grayscale(0%);\n		transform: translateY(-3px);\n	}\n\n	"," {\n		padding: 1.5rem;\n	}\n"]);return O=function(){return n},n}var S=(0,z.ZP)(function(n){var e=n.className,r=(0,i.Z)(n,["className"]);return(0,a.jsx)(k.Z,(0,x.Z)((0,t.Z)({},r),{classes:{popper:e}}))})(C(),N.Z.tooltip),P=(0,z.ZP)("a")(O(),function(n){return n.theme.breakpoints.up("sm")}),T=function(n){var e=n.children,r=n.title,o=(0,i.Z)(n,["children","title"]),l=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"Tooltip-text",children:r}),o.href&&(0,a.jsx)(w.Z,{className:"Tooltip-icon"})]});return(0,a.jsx)(S,{followCursor:!0,title:l,children:(0,a.jsx)(P,(0,x.Z)((0,t.Z)({},o),{children:e}))})},_=r(5968);function F(){var n=(0,o.Z)(["\n	padding-top: 4rem !important;\n	padding-bottom: 4rem !important;\n"]);return F=function(){return n},n}var X=(0,l.Z)(_.g)(F());function q(){var n=(0,o.Z)(["\n	display: flex;\n	height: inherit;\n	width: inherit;\n	place-items: center;\n	place-content: center;\n	margin: 0 0.5rem;\n"]);return q=function(){return n},n}function A(){var n=(0,o.Z)(["\n	width: 100%;\n	height: 100%;\n	object-fit: contain;\n"]);return A=function(){return n},n}var B=l.Z.figure(q()),H=l.Z.img(A()),I=function(n){return(0,a.jsx)(B,{children:(0,a.jsx)(H,{style:n.styleOverrides,src:n.image,alt:n.name})})},W=r(4924),Y=r(9008),E=r.n(Y),L=(0,z.ZP)("span")(function(n){var e=n.theme,r=n.font,i=n.styleOverrides,o=n.mobileStyleOverrides;return(0,x.Z)((0,t.Z)({fontSize:"2rem",whiteSpace:"nowrap",fontFamily:r},i),(0,W.Z)({},e.breakpoints.down("sm"),(0,t.Z)({},o)))}),G=function(n){var e,r=null!==(e=n.font)&&void 0!==e?e:"Karla";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(E(),{children:[(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=".concat(r,"&display=swap"),rel:"stylesheet"})]}),(0,a.jsx)(L,{font:r,styleOverrides:n.styleOverrides,mobileStyleOverrides:n.mobileStyleOverrides,children:n.name})]})},K=r(7005);function R(){var n=(0,o.Z)(["\n	:root {\n		--marquee-item-gap: 1rem;\n	}\n\n	overflow: hidden;\n	gap: var(--marquee-item-gap);\n\n	.marquee {\n		gap: var(--marquee-item-gap);\n	}\n\n	.overlay {\n		pointer-events: none;\n	}\n"]);return R=function(){return n},n}var V=(0,l.Z)(K.Z)(R());V.defaultProps={direction:"left",speed:10,pauseOnHover:!0};var D=function(n){return(0,a.jsx)(d.Z,{marginX:"2rem",variant:"h3",color:"grey.500",sx:(0,t.Z)({cursor:"pointer","&:hover":{color:"grey.700"}},n.styleOverrides),children:n.name})};function J(){var n=(0,o.Z)(["\n	display: grid;\n	gap: 1rem;\n\n	.ActionStack-root {\n		margin-top: 2.5rem;\n	}\n"]);return J=function(){return n},n}function M(){var n=(0,o.Z)(["\n	display: grid;\n	grid-template-columns: repeat(3, minmax(0, 1fr));\n	column-gap: 1rem;\n	row-gap: 0;\n	place-items: center;\n	place-content: center;\n"]);return M=function(){return n},n}var Q=(0,l.Z)(f.W)(J()),U=function(n,e){var r,i={logo:(0,a.jsx)(I,(0,t.Z)({},n)),type:(0,a.jsx)(G,(0,t.Z)({},n)),default:(0,a.jsx)(D,(0,t.Z)({},n))}[null!==(r=n.type)&&void 0!==r?r:"default"];return(0,a.jsx)(T,{href:n.url,title:n.name,children:i},e)},$=(0,l.Z)("div")(M()),nn=function(n){var e=n.className,r=n.companies,t=(0,i.Z)(n,["className","companies"]),o=(0,u.Z)(function(n){return n.breakpoints.down("sm")})?$:V;return(0,a.jsx)(X,{className:(0,m.Z)(e,"FeaturedInBlock-root"),children:(0,a.jsxs)(Q,{children:[(0,a.jsxs)(g.u,{size:"small",textAlign:"center",marginX:"auto",maxWidth:"50rem",children:[(0,a.jsxs)(h.X,{level:4,children:["We work with ",(0,a.jsx)(v.v,{children:"creatives"})," like you."]}),t.description?(0,a.jsx)(d.Z,{variant:"body2",children:t.description}):null]}),(null==r?void 0:r.length)&&(0,a.jsx)(o,{children:r.map(U)}),(0,a.jsx)(p.k,{align:"center",size:"large",actions:[{label:"Leave a Review",color:"text",endIcon:(0,a.jsx)(s.Z,{})}],children:(0,a.jsxs)(b,{href:"#yelp-test",color:"magenta",icon:(0,a.jsx)(c.mF,{}),children:["Trusted by ",(0,a.jsx)(v.v,{color:"magenta",children:"150+"})," on"," ",(0,a.jsx)(v.v,{color:"magenta",children:"Yelp"})]})})]})})}}}]);