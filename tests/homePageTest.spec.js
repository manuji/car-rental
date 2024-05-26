import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

test('basic example test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText('Save big with our car rental');
});




test('test2', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'logo-img' })).toBeVisible();
  await expect(page.locator('#home')).toContainText('Plan your trip now');
  await expect(page.locator('h1')).toContainText('Save big with our cars rental');
  await expect(page.locator('#home')).toContainText('Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.');
  await expect(page.locator('#home')).toContainText('Book Ride');
  await expect(page.locator('#home')).toContainText('Learn More');
  await expect(page.getByRole('navigation')).toContainText('Sign In');
  await expect(page.getByRole('navigation')).toContainText('Register');
  await expect(page.locator('#home').getByRole('img', { name: 'car-img' })).toBeVisible();
  await expect(page.locator('#booking-section')).toContainText('Book a car');
  await expect(page.locator('#booking-section')).toContainText('Drop-of *');
  await expect(page.locator('#booking-section')).toContainText('Drop-of *');
  await expect(page.locator('#booking-section')).toContainText('Search');
  await expect(page.locator('#booking-section form div').filter({ hasText: 'Select Your Car Type *Select' }).getByRole('combobox')).toHaveValue('Select your car type');
  await expect(page.locator('#booking-section form div').filter({ hasText: 'Pick-up *Select pick up' }).getByRole('combobox')).toHaveValue('Select pick up location');
  await expect(page.locator('#booking-section form div').filter({ hasText: 'Drop-of *Select drop off' }).getByRole('combobox')).toHaveValue('Select drop off location');
  await expect(page.getByLabel('Pick-up *')).toBeEmpty();
  await expect(page.getByLabel('Drop-of *')).toBeEmpty();
  await page.getByRole('heading', { name: 'Quick & easy car rental' }).click();
  await page.getByRole('heading', { name: 'Quick & easy car rental' }).click();
  await expect(page.locator('#root')).toContainText('Select CarWe offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs');
  await expect(page.locator('#root')).toContainText('Contact Operator');
  await expect(page.locator('#root')).toContainText('Our knowledgeable and friendly operators are always ready to help with any questions or concerns');
  await expect(page.locator('#root')).toContainText('Let\'s Drive');
  await expect(page.locator('#root')).toContainText('Whether you\'re hitting the open road, we\'ve got you covered with our wide range of cars');
});