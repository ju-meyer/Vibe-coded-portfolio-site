import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'

const targetUrl = process.argv[2] || process.env.SCREENSHOT_URL || 'http://127.0.0.1:4173'
const outputPath = process.argv[3] || process.env.SCREENSHOT_OUTPUT || 'artifacts/homepage.png'

async function capture() {
  const browser = await chromium.launch({ headless: true })

  try {
    const page = await browser.newPage({ viewport: { width: 1512, height: 982 } })
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(1200)

    const absoluteOutput = path.resolve(outputPath)
    await fs.mkdir(path.dirname(absoluteOutput), { recursive: true })
    await page.screenshot({ path: absoluteOutput, fullPage: true })

    console.log(`Screenshot saved to ${absoluteOutput}`)
  } finally {
    await browser.close()
  }
}

capture().catch((error) => {
  console.error('Failed to capture screenshot:', error)
  process.exit(1)
})
