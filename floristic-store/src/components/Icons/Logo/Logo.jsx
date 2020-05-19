import React from 'react';
import './Logo.scss';

export const Logo = (props) => {
    return (
        <div className="companyLogo">
            <svg height="512"
                 width="512"
                 viewBox="0 0 60 60"
                 xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-1)">
                    <circle id="Oval" cx="31" cy="1.01" r="1"/>
                    <circle id="Oval" cx="23" cy="6.01" r="1"/>
                    <circle id="Oval" cx="8" cy="14.01" r="1"/>
                    <circle id="Oval" cx="39" cy="6" r="1"/>
                    <circle id="Oval" cx="54" cy="14" r="1"/>
                    <path id="Shape"
                          d="m12.17 46c-1.1736 1.7299111-1.9175289 3.7148644-2.17 5.79-.06330327.5873098.1362602 1.1725627.5451861 1.5988487.4089259.4262859.9853809.6499957 1.5748139.6111513 3.2796116-.1486331 6.5051057-.8906323 9.52-2.19 1.84 4.16 7.16 7.27 8.41 7.95.5929027.3200379 1.3070973.3200379 1.9 0 1.25-.68 6.57-3.79 8.41-7.95 3.0186332 1.2986486 6.2472707 2.0405916 9.53 2.19.58969.0362032 1.1652144-.1901658 1.5722291-.6183993.4070148-.4282336.6038692-1.0145096.5377709-1.6016007-.2486976-2.072967-.9930201-4.0555403-2.17-5.78 5.23-.38 9.91-4.15 10.45-4.6.4835975-.405333.7475495-1.0151144.7121118-1.6451188-.0354378-.6300044-.3661088-1.2063382-.8921118-1.5548812-1.6760174-.9350559-3.454482-1.6732865-5.3-2.2 3.64-6.11 3.2-13.65 3.2-14.06-.0274859-.4464073-.3480513-.8202813-.785033-.9155805s-.8841075.1111528-1.094967.5055805c-.4125523.7201257-.9511038 1.3602907-1.59 1.89.2287793-1.1120909.3857703-2.2377493.47-3.37.0204264-.4550414-.2692391-.8663899-.7045452-1.0005113-.4353061-.1341213-.9062464.0428784-1.1454548.4305113-.7542089 1.0525391-1.6686239 1.980451-2.71 2.75.3007038-2.3101739.1306212-4.6573134-.5-6.9-.3115286-.905764-1.2215074-1.463493-2.17-1.33-.5.07-1.21.19-2 .38-.3585005-1.1810204-.8552769-2.3155504-1.48-3.38-.4868315-.8292442-1.4948779-1.19466099-2.4-.87-2.0805318.7049621-3.9276376 1.967497-5.34 3.65-1.3992138-1.2557883-2.8900028-2.4056345-4.46-3.44-.6628063-.43083722-1.5171937-.43083722-2.18 0-1.5714024 1.0404843-3.0653168 2.1935056-4.47 3.45-1.4152719-1.6928584-3.2698984-2.9627239-5.36-3.67-.8963487-.30825479-1.8859758.055026-2.37.87-.6210725 1.0813364-1.1111888 2.2327739-1.46 3.43-.81-.19-1.51-.31-2-.38-.9403188-.1372211-1.8473622.4061689-2.17 1.3-.6329879 2.2420879-.809809 4.588368-.52 6.9-1.0316964-.7701834-1.93894553-1.6942959-2.69-2.74-.22827045-.4062711-.70690531-.6010151-1.15397745-.4695233-.44707213.1314918-.74405658.5543592-.71602255 1.0195233.08422972 1.1322507.24122066 2.2579091.47 3.37-.63639559-.529501-1.17169136-1.1698231-1.58-1.89-.20620307-.4046183-.65916222-.6194857-1.1029714-.5232096s-.76701956.4795188-.7870286.9332096c0 .41-.43 8 3.27 14.17-1.83491821.4896916-3.61692055 1.1596173-5.32 2-.54812404.3377881-.90011081.9187982-.94570137 1.5610305-.04559056.6422322.22079101 1.2671388.71570137 1.6789695.55.49 5.28 4.24 10.45 4.65zm-.17 6c.47-4.38 3.82-7.45 4.95-8.36 1.5925645.5270802 3.2532206.8201371 4.93.87-.7083963 1.6888739-.9867101 3.5271194-.81 5.35-2.8624844 1.2755002-5.9392621 2.0014433-9.07 2.14zm19 6c-3-1.63-8-5.36-8-9 .0012094-1.596741.3925583-3.1690024 1.14-4.58 1.0220511-.1095801 2.0284401-.3343403 3-.67 2.5590833.3349978 5.1509167.3349978 7.71 0 .9714427.3340985 1.9780349.5555488 3 .66.749844 1.4141181 1.1445189 2.9893857 1.15 4.59 0 3.65-5 7.38-8 9zm9.92-8.15c.1733754-1.8227897-.1048159-3.6602258-.81-5.35 1.7010616-.0355946 3.3868913-.3289289 5-.87 2.6395054 2.0627731 4.3892362 5.0577111 4.89 8.37-3.1297929-.1453358-6.2053307-.8709864-9.07-2.14zm18.08-10.02c-.51.43-5.15 4.17-10 4.17h-.69c-.3666021-.4125669-.7537596-.8063996-1.16-1.18 2.533313-1.1168473 4.7571605-2.832779 6.48-5 1.8602817.4646724 3.6618118 1.1389881 5.37 2.01zm-3.06-15c-.27 3.82-1.51 10.62-6.59 14.32-2.7113919 2.073535-6.0078331 3.2388375-9.42 3.33 8.81-3.24 12.49-11.1 14-16.61.740543-.1671967 1.4299608-.5101906 2.01-1zm-3.36-1.81c-2.09 10.98-8.81 18.55-20.52 18.98.27-2.83 1.7-10.76 9.23-13 4.1426875-1.1552002 7.991542-3.1801953 11.29-5.94zm-4.53-7.02c.6714907 2.5639173.6955443 5.2544872.07 7.83-1.3348387.8079836-2.7327099 1.5069192-4.18 2.09-.3568434-2.7118791-1.4226963-5.2816541-3.09-7.45 2.205155-1.3085157 4.6559751-2.1492831 7.2-2.47zm-5.49-4c.5364708.9175663.9563798 1.8984737 1.25 2.92-1.4913314.4549634-2.9067863 1.1289895-4.2 2-.52-.61-1.06-1.18-1.59-1.73 1.1767714-1.4759999 2.752506-2.5831791 4.54-3.19zm-11.56 0c1.11.73 10.67 7.17 11 14.63-.42.14-.83.28-1.28.41-5.86 1.76-8.52 6.42-9.72 10.25-1.2-3.83-3.86-8.49-9.71-10.29-.45-.13-.86-.27-1.28-.41.32-7.42 9.88-13.86 10.99-14.59zm-11.58 0c1.805598.5824422 3.3989264 1.6852481 4.58 3.17-.53.54-1.07 1.12-1.58 1.73-1.2947322-.8746562-2.7140465-1.5489147-4.21-2 .2960358-1.0080185.7017978-1.9805061 1.21-2.9zm-5.48 4c2.5427646.3395467 4.9931807 1.1790096 7.21 2.47-1.6673037 2.1683459-2.7331566 4.7381209-3.09 7.45-1.4518041-.5841075-2.8531816-1.2864685-4.19-2.1-.6099803-2.5739071-.5859591-5.2574249.07-7.82zm6.77 13c7.62 2.29 9 10.18 9.24 13-11.67-.41-18.44-8-20.53-18.92 3.2872477 2.7720611 7.1404142 4.7924992 11.29 5.92zm-12.65-3.09c1.52 5.51 5.2 13.37 14 16.61-3.3992771-.094775-6.6818989-1.2601408-9.38-3.33-5.08-3.7-6.33-10.48-6.62-14.31.5743522.4988538 1.26033787.8521364 2 1.03zm.4 11.92c1.7027904 2.1544886 3.8975166 3.8691184 6.4 5-.35.32-.75.72-1.17 1.19h-.69c-3.93 0-8.13-2.61-10-4.14 1.75560042-.8439106 3.58280405-1.5299486 5.46-2.05z"/>
                </g>
            </svg>
        </div>
    )
};