import { test, expect } from '@playwright/test'

test.beforeEach('Navigate to correct page', async ({page}) =>{
    await page.goto('https://car-rental-ten.vercel.app/');
    await page.getByRole('link', {name:'Vehicle Models'}).click();
    await expect(page).toHaveURL('https://car-rental-ten.vercel.app/models');
});

test('Verify the header of the page', async ({page})=>{
    await expect(page.getByRole('heading', {name: 'Vehicle Models'})).toContainText('Vehicle Models');
});

test('Verify the car cards are displayed with accurate information', async ({page}) =>{
    await page.locator('#root div').filter({ hasText: 'Audi A1$45per day Audi4/5' }).nth(3).isVisible();
    await page.locator('#root div').filter({ hasText: 'Golf 6$37per day VW4/5' }).nth(3).isVisible();
    await page.locator('#root div').filter({ hasText: 'Toyota$30per day Camry4/5' }).nth(3).isVisible();
    await page.locator('#root div').filter({ hasText: 'BMW 320$35per day ModernLine4' }).nth(3).isVisible();

})

