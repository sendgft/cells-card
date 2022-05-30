import { Gift } from './types'

;(() => {
  window.setGift = (gift: Gift) => {
    let html = `
      <p class="msg">${gift.message}</p>
    `

    let assets = ''
    ;(gift.native ? [gift.native] : []).concat(gift.erc20 || []).forEach(a => {
      assets += `<li><label>${a.symbol}:</label><em>${a.amount}</em></li>`
    })
    if (assets) {
      assets = `<ul class="assets">${assets}</ul>`
      html += assets
    }

    html += `
      <div class="meta">
        <p class="from"><label>from:</label><em>${gift.sender}</em></p>
        <p class="to"><label>to:</label><em>${gift.receiver}</em></p>
        <p class="date">${new Date(gift.datetime).toUTCString()}</p>
      </div>
    `

    document.getElementById('content').innerHTML = html
  }
})()
