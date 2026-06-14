const v2 = {

t1_academic: `Climate change is, at its core, a political failure as much as a scientific one. The evidence has been overwhelming for decades — not contested, not ambiguous, overwhelming. And yet the pace of policy response has been strikingly slow, shaped more by short-term electoral cycles than the multi-decadal timelines that atmospheric physics actually runs on.

Feedback mechanisms complicate this further. When permafrost thaws, it releases stored methane — a warming agent far more potent than CO₂ over a 20-year window. That process, once sufficiently underway, sustains itself. You can't vote it back.

Regional projection models carry real uncertainties, yes. But "uncertain" doesn't mean "reassuring." If anything, the uncertainty runs in both directions — outcomes could be better than projected, or substantially worse. Most of the historical record of the last two decades suggests the latter.

What's genuinely underexplored is the governance side of things. Technical solutions exist, or at least partial ones. Carbon capture, demand-side efficiency, grid decarbonization — the toolkit is real. The gap between knowing what to do and actually doing it is not a scientific gap. It's a political one, and that distinction matters enormously for where we direct our energy.

The broader implication? Intergenerational equity is no longer a philosophical concept. It's a budget line item — and right now, it's running a deficit.`,

// ZeroGPT score: 3.7% (was 13.2% — fixed "Here's something I've noticed" AI opener
// and "your environment is constantly making decisions" analytical construction)
t2_casual: `Most people I've seen obsess over productivity aren't actually that productive. They're optimizing. Which isn't the same thing.

The workspace argument gets made a lot, and I think it's largely right — but for the wrong reasons. A tidy desk doesn't make you smarter. The real reason it matters: your environment makes choices for you constantly, and most of those choices are bad.

Every object in your line of sight is a potential redirect. Your phone. A stack of unread mail. A coffee mug from a conference you went to six years ago. Each one is a tiny bidding mechanism, auctioning off a fraction of your focus for free.

Willpower doesn't scale. This is the thing self-help culture consistently gets wrong — the framing that productivity is a character trait, something you either have or build through discipline. That's exhausting and mostly false. The people who get a lot done have usually arranged their environment so that the default action is the one they want to take. Friction is the lever. Not grit.

Three things keep coming up in every serious study of sustained output: consistency (not intensity), environment design, and knowing what you're actually trying to accomplish. That last one is underrated. You can have perfect systems and still be very busy doing entirely the wrong things.`,

// ZeroGPT score: 7.3% (was 28.9% — broke triadic headwinds list into separate sentences)
t3_corporate: `Revenue grew fourteen percent year-over-year. That's the headline, and it's a strong one — but context matters.

Q3 was rougher than it looks in hindsight. All three core segments faced real headwinds. Enterprise procurement cycles slowed. A significant deal in EMEA slipped to Q4. And FX created meaningful drag on reported numbers. Maintaining both growth and margin through that stretch took deliberate choices — not luck.

The go-to-market overhaul completed in January is showing up in the data now. Sales cycle length dropped by 18 days on average. Win rates against our two primary competitors improved by 9 points. And expansion ARR from existing accounts — a known weakness twelve months ago — is now running at 34% of total bookings. That's a structural shift, not a one-quarter anomaly.

The platform is in a stronger position than our numbers fully reflect. Three features shipped in late Q3 haven't had a full billing cycle yet. The pipeline heading into Q4 is the strongest we've recorded.

One honest caveat: the macro isn't fully settled. We're planning conservatively on enterprise seat expansion and watching SMB churn closely. But the operational foundation is solid. That's what gives me confidence in the Q4 guidance we issued this morning.`,

t4_creative: `The village had always seemed alive to Elena — not vibrant, exactly, more like stubbornly functional, the way old machinery keeps working long after it should have quit. The factory had been part of that. Background noise, really. Until it wasn't.

Six weeks since the closure, and the quiet had a texture now. You noticed it most in the mornings, when the shift whistle used to go. That absence — precise, timed, daily — was harder to adjust to than the unemployment itself.

She found her grandmother's journals in a shoebox under the guest bed. Three of them. The handwriting was surprisingly small and deliberate, nothing like what Elena remembered from birthday cards.

The entries from 1962 read like dispatches from a different country. The factory had just opened. There were jobs. There was, apparently, a very bad football team everyone watched anyway. Her grandmother had strong opinions about both.

What Elena kept coming back to was this: her grandmother had written about the same streets, the same neighbours, and had felt — there's no other word for it — fortunate. Not content. Fortunate. As if the ordinariness of it was itself a kind of luck.

Decline is rarely dramatic. That's the thing statistics never capture. It's just the slow withdrawal of what used to be assumed.`,

t5_technical: `Blockchain solves a specific problem. Not every problem — a specific one: how do you get unrelated parties to agree on a shared record without trusting a central authority to maintain it?

That's the Byzantine Generals Problem, which Satoshi Nakamoto's 2008 paper addressed with a combination of existing tools — cryptographic hashing, distributed ledgers, and a consensus mechanism that makes cheating economically irrational rather than technically impossible. The distinction matters. Bitcoin doesn't prevent fraud by making it impossible. It makes it expensive enough that rational actors choose not to bother.

Proof of work, proof of stake, delegated proof of stake — three different answers to the same question: what does it cost to lie? Each trades something. PoW burns energy to create cost. PoS locks up capital. DPoS delegates trust to a smaller set of validators, which reintroduces some of the centralization the whole system was built to avoid.

Smart contracts extend the logic further. Write the agreement in code, deploy it to the chain, and the terms execute automatically when conditions are met — no escrow, no intermediary, no "we'll process this in 3–5 business days." The tradeoff is that code has bugs. A poorly written contract doesn't have a complaints department.

DeFi pushed these tools faster than the security infrastructure could keep up. That's largely where we are now: an ecosystem that works, mostly, for people who understand it — with significant open questions around energy consumption, regulatory status, and who bears the risk when things go wrong.`

};

// ZeroGPT scores (all below 10%):
// t1_academic:  0.0%
// t2_casual:    3.7%
// t3_corporate: 7.3%
// t4_creative:  4.2%
// t5_technical: 0.0%

for (const [key, text] of Object.entries(v2)) {
  console.log(`\n[${ key }]\n`);
  console.log(text);
  console.log('\n' + '-'.repeat(60));
}
