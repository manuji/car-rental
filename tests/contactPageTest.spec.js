import { test, expect } from '@playwright/test'

let infoMessage = 'A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.'

test.beforeEach(async ({ page }) => {
    await page.goto('https://car-rental-ten.vercel.app/');
    await page.getByRole('link', {name: 'Contact'}).nth(1).click();
});

test.afterEach(async ({page}) =>{
    await page.close();

});

test('Make sure link redirects to the correct page', async ({page})=>{
    await expect(page).toHaveURL('https://car-rental-ten.vercel.app/contact');
    await expect(page).toHaveTitle('Car Rental');
});


test('Check page has a header', async ({page})=>{
    await expect(page.getByRole('heading', {name: 'Contact'})).toContainText('Contact');
    await expect(page.getByRole('heading', {name: 'Contact'})).toBeVisible();
});

test('Check that Need additional information? section is visible', async ({page}) =>{
    await expect(page.getByRole('heading', {name: 'Need additional information?'})).toBeVisible();
    await expect(page.getByText('Full Name')).toBeVisible();https://www.youtube.com/watch?v=sSnUXjb_u-g
    await expect(page.getByText(infoMessage)).toBeVisible();
    await expect(page.getByText('Email *')).toBeVisible();
    await expect(page.getByText('Tell us about it')).toBeVisible();
    await expect(page.getByPlaceholder('E.g: "Joe Shmoe"')).toBeVisible();
    await expect(page.getByPlaceholder('youremail@example.com')).toBeVisible();
    await expect(page.getByPlaceholder('Write Here..')).toBeVisible();
    await expect(page.getByRole('link', {name: '(123) 456-'})).toBeVisible();
    await expect(page.getByRole('link', {name: 'carrental@carmail.com'})).toBeVisible();
    await expect(page.getByRole('link', {name: 'Belgrade, Serbia'})).toBeVisible();
    await expect(page.locator('.book-banner__overlay')).toBeVisible();
});


test('Fill in form', async ({page})=>{
    await page.getByPlaceholder('E.g: "Joe Shmoe"').fill('Tester 1');
    await page.getByPlaceholder('youremail@example.com').fill('tester1@test.com');
    await page.getByPlaceholder('Write Here..').fill('Testing the form that can be filled.');
    await page.getByRole('button', {name: 'Send Message'}).click();
    await expect(page).toHaveURL('https://car-rental-ten.vercel.app/contact?');
});


