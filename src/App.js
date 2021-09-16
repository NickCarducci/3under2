import FraudMoney2 from "./FraudMoney2";
import React from "react";
import "./styles.css";
import TwitterTweetEmbed from "./TwitterTweetEmbed.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginTop: 200
      //marginTop: window.innerWidth * (window.innerHeight / window.innerWidth)
    };
    this.header = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.resize);
    this.resize();
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
  };
  resize = () => {
    this.setState({
      marginTop: this.header.current.offsetHeight
    });
  };
  render() {
    const { marginTop } = this.state;
    return (
      <div className="App">
        <div
          ref={this.header}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            top: "0px",
            position: "fixed",
            right: "0px",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          <span>
            <a
              href="https://truncatedsalestax.com"
              style={{
                color: "rgb(250,250,255)",
                WebkitTextStroke: ".8px rgb(0,0,20)",
                textDecoration: "none"
              }}
            >
              truncatedsalestax.com
            </a>
            {" - "}
            <a
              href="https://saverparty.xyz"
              style={{
                color: "rgb(250,250,255)",
                WebkitTextStroke: ".8px rgb(0,0,20)",
                textDecoration: "none"
              }}
            >
              SaverParty
            </a>
          </span>
          <span>
            <a
              href="https://vaults.biz"
              style={{
                color: "rgb(250,250,255)",
                WebkitTextStroke: ".8px rgb(0,0,20)",
                textDecoration: "none"
              }}
            >
              vaults.biz
            </a>
            {" - "}
            <a
              href="https://residualsplit.us"
              style={{
                color: "rgb(250,250,255)",
                WebkitTextStroke: ".8px rgb(0,0,20)",
                textDecoration: "none"
              }}
            >
              LaunderingShareSplit
            </a>
          </span>
          <a
            href="https://lightte.ch"
            style={{
              color: "rgb(250,250,255)",
              WebkitTextStroke: ".8px rgb(0,0,20)",
              textDecoration: "none"
            }}
          >
            lightte.ch
          </a>
        </div>
        <div
          style={{
            transition: ".3s ease-in",
            margin: "10px",
            marginTop: marginTop,
            width: "calc(100% - 20px)",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          <h2>
            Perfect{" - "}
            <a href="https://nationalsecuritycasino.com">
              nationalsecuritycasino.com
            </a>
            {" - "}
            <TwitterTweetEmbed
              key={"BondLaundering"}
              isHashtag={true}
              isProfile={false}
              tweetId={"BondLaundering"}
            />
          </h2>{" "}
          half unemployed since 3/2020 are 65+, 20x 55+/millennials rental
          income per capita, accrual 44x checking, cash:debt*income back to
          1908, truncatedsalestax
          <br />
          <br />
          Part I:{" "}
          <a href="https://goo.gl/maps/Wuj3o3YSYNPGPUPV6">
            dr dickerson malpractice conflict of interest disability medicare
            orthopedic surgeon bone marrow transplant
          </a>
          &nbsp; disability recipients are mostly 65+... their whole lives to
          save, and they cannot nourish themselves. they commit me for 13 days
          and release me under the same conditions to the loiterers that are
          borrowers that I chore for without work being for myself and my gains,
          not to jigger profits from consumers but have the ends' means and the
          ends itself for my work and settled purchases for my expenditures of
          these public-park-deeds
          <br />
          Part II:&nbsp;
          <a href="https://4vosh.csb.app/Red_Bank,_New_Jersey,_United_States">
            #MillennialIncomeDeficit #Discrimination #ImplausibleLandlordUse
            #CreditCounterfeitLaundering
          </a>
          <br />
          <br />
          poorness=poverty/equality is transitory, 10x less (1/price)/hours
          since 1980, 1/11 GDP is m2 without checking(
          <a href="https://vaults.biz">currencyComponentofM1</a>)
          <br />
          <br />
          Socialism is pareto, this domain namesake is for the policy to run
          government free rider immutables without bonds, at the estimated 3%ile
          average-indexed-purchases, for instance, about max $60/transaction
          @itemized-with-geohash for $2k average sale-item-traded.
          <br />
          <br />
          Other policies for accrual and non-rollover enunciate
          third-party-beneficiary and competing with consumer intent to
          premium(pool)=cost/price inflation-duress game non-improvement
          abjectively-derived intent.
          <TwitterTweetEmbed
            key={"ReverseDontCancel"}
            isHashtag={true}
            isProfile={false}
            tweetId={"ReverseDontCancel"}
          />
          <br />
          <a href="https://2052.live">pattern day trading</a>
          without&nbsp;
          <a href="https://micro-theory.com">
            national-government-equity or -monopsony-trust-building
          </a>
          &nbsp;& with the least frugal labor*resource Supply &
          intermediate-Demand finding the last-traded-price derived of
          humoral-value not undercut by those competing with consumers,
          including all counterfeit (brand, copyright or credit), fraud, duress
          or theft and the malfeasance of the courts - the heart of
          free-rider-immutable services.
          <br />
          <br />
          Marxism is the same as Mises about credit is counterfeit and duress is
          voidable. court-of-law doesn't exist if justice would lessen their pay
          @RudyGiuliani get out!
          <br />
          <br />
          2% of the population owns 4400% of the assets
          <br />
          <br />
          With powers to target-margins of abject-monopsonies to limit waste and
          maintain fairness for labor eternally, not just this year or those not
          retired. Free-rider-immutable services and their assets to lessen the
          burden of those services - with unchangingly-paid-courts - as to their
          assets are not the individuals', like a business-account profit is to
          income as business-account is to non-profit or individual per
          (governmental-organization) law (must have a board so they have more
          concentrated power which legally may outweigh rights if a judge gives
          a crap about that)
          <br />
          <br />
          time will never make reversing fortunes debt:currencyComponentofM1
          possible when we exchange 100% every year between the percentiles
          under 96%. We must reimburse down-payments and reposess by going back
          as far as we can an renumerating reported wealth changes by that
          years' debt:cash inflation
          <br />
          <br />
          Efficiency (labor-equity) Act & Accord
          <br />
          1. Taxes are slavery except free-rider-immutable services, below
          <br />
          2. Sales tax is efficient, under $2k buys:
          <br />
          first grand is $60, second is $30 (6%, 3%)
          <br />
          a. Local police/plow/sanitation
          <br />
          b. tollless roads
          <br />
          c. supreme courts. (new: if justice wouldn't lessen their pay)
          <br />
          <br />
          <b>
            Trash, water & electricity is free-rider-mutable; equity-,
            societal-security and toilets are not
          </b>
          <br />
          The right [to be included without court-certified-evidence of mvp] is
          not from Civil Rights it is free-rider-excluder enslaving those denied
          not based on mvp, of as evidenced as a cease-and-desist defamation
          order would require.
          <br />
          <br />
          Here, you must prove condensation does not happen @uscourts @neiltyson
          <h1>
            <a
              href="https://drive.google.com/file/d/1FnCZjwC22GDhR9XTxV3idOu4ls9_0l5R/view?usp=sharing"
              //https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c"
            >
              3% under $2k
            </a>
            {" - "}
            <a href="https://drive.google.com/file/d/1j6sfrhFszTyy11AowjfGyQzXZ1yYD4mO/view?usp=sharing">
              voting blockchain blunder, IPFS phoenix
            </a>
          </h1>
          <a href="https://thumbprint.us">thumbprint.us</a>
          <br />
          Saver Party is the only party that can offer you degrowth & consumer
          protection
          <TwitterTweetEmbed
            key={"1385635835375140875"}
            tweetId={"1385635835375140875"}
          />
          {/*Please stop letting 
            @PressSec
            and friends say these are tax-payer dollars 
            @fcc
            
            @SaverParty
            <br/>
          <br/>*/}
          Not to mention the comparative law forgone of counterfeit in
          fractional reserves gained by duress and threat by state in 1932
          #ChauvinTrial
          <br />
          <br />
          A national gun registry doesn’t harm those who bluff if you don’t
          arrest them for just having an unregistered gun. Just get them
          registered if you find them @NRA
          <br />
          Joe @POTUS wants to add liability for gun manufacturers (the only
          people who cannot get sued), limited liability exists, they cannot get
          sued because damage is garnered around an individual-event and they
          are clear about the product. Insurance, on-the-other-hand, harm
          involuntary
          <br />
          <br />
          Drunk driving is as dangerous as @nra . cc: @gregkellyusa
          <br />
          <br />
          let me check on this hold on moldmask.co, cocaine is money, purity
          health dpt
          <br />
          <br />
          HOLY SHIT (drunk driving 10,142 (
          <a href="https://nhtsa.gov/risky-driving/drunk-driving">2019</a>))
          (guns 19,379 (
          <a href="https://businessinsider.com/2020-more-gun-deaths-than-any-year-over-two-decades-2021-3#:~:text=There%20were%2019%2C379%20gun%20violence,of%20annual%20US%20gun%20deaths.">
            2020
          </a>
          )) 2020 saw more gun deaths in the US than any year in over two
          decades, showing even a pandemic... There were 19,379 gun violence
          deaths in the US in 2020, according to data from the nonprofit Gun
          Violence Archive. businessinsider.com
          <br />
          <br />
          what if it would go all the way to flip if policy changed.&nbsp;
          <a href="https://vaults.biz">let's go BACK IN TIME</a>
          <br />
          <br />
          Eucharist is animal sacrifice and idolatry in one; Jesus never said he
          would die for Sins, G-d is judge, usury is haram and debt would be
          equity/profit-share otherwise, insurance & income-based-justice is
          conflicted interest, invoice is counterfeit and coagulation
          prisoners'dilemma duress of demand & built-to-rent is intent to harm
          and monopsony of labor to not win favor of consenting,
          ready-willing-able-able customers but competing with them, government
          or otherwise is not increasing supply, national security is not
          improved by bonds instead of:
          <br />
          <br />
          Creditors repossess the assets now and give back the down-payments?
          @JerseyRizzo. a deposit is not an option to buy if you lose the opp,
          this is a sale and not an option to sell
          <br />
          <br />
          <div
            style={{
              position: "absolute",
              width: "100%"
            }}
          >
            <FraudMoney2 />
          </div>
        </div>
      </div>
    );
  }
}
