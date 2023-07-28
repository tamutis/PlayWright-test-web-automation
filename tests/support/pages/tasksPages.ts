import { Page, expect } from "@playwright/test"
import { taskModel } from "../../fixture/task.model"

export class TasksPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('');
        await expect(this.page).toHaveTitle('React • TodoMVC');
    }

    async create(task: taskModel) {
        const inputTaskName = this.page.locator('input[class*=new-todo]');
        await inputTaskName.fill(task.name);
        await this.page.getByPlaceholder('What needs to be done?').press('Enter');

    }
    
    async toggle(taskName: string) {
        const target = this.page.locator('css=body > section > div > section > ul > li > div > input');
        const targetPosition = target.first();
        await targetPosition.click()
    }

    async btnCompleted() {
        const btnCompleted = this.page.locator('xpath=//a[contains(text(),"Completed")]');
        await btnCompleted.click()
    }

    async btnActive() {
        const btnActive = this.page.locator('xpath=//a[contains(text(),"Active")]');
        await btnActive.click()
    }

    async btnClearCompleted() {
        const btnCompleted = this.page.locator('xpath=//button[contains(text(),"Clear completed")]');
        await btnCompleted.click()
    }

    async assertTaskVisible(taskName: string) {
        const target = this.page.locator(`xpath=//label[contains(text(),'${taskName}')]`)
        const targetPosition = target.first();
        await expect(target).toBeVisible();
    }

    async assertNotTaskVisible(taskName: boolean) {
        const target = this.page.locator(`xpath=//label[contains(text(),'${taskName}')]`)
        const targetPosition = target.first();
        const isVisible = await targetPosition.isVisible();
        await expect(isVisible).toBe(taskName);
    }

    async assertdBeDone(taskName: string) {
        const target = this.page.getByText(taskName)
        await expect(target).toHaveCSS('text-decoration-line', 'line-through')
    }
}