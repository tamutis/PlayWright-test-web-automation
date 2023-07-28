import { test, expect } from '@playwright/test';
import { TasksPage } from '../support/pages/tasksPages';
import { taskModel } from '../fixture/task.model';
import data from '../../../test-web-automation/tests/fixture/tasks.json'

let tasksPage: TasksPage

test.beforeEach(({ page }) => {
  tasksPage = new TasksPage(page)
})

test.describe('Cadastro', () => {
  test('Deve poder cadastrar uma tarefa', async ({ }) => {
    const task = data.success as taskModel
    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.assertTaskVisible(task.name)
    await tasksPage.toggle(task.name)
    await tasksPage.assertdBeDone(task.name)
  })
});

test.describe('Validação', () => {
  test('Deve retornar tarefa selecionada', async ({ }) => {
    const task = data.success as taskModel
    const tasks = data.completed as taskModel

    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.create(tasks);
    await tasksPage.toggle(task.name)
    await tasksPage.btnCompleted();
    await tasksPage.assertTaskVisible(task.name)
  })

  test('Deve retornar tarefa não selecionada', async ({ }) => {
    const task = data.success as taskModel
    const tasks = data.active as taskModel

    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.create(tasks);
    await tasksPage.toggle(task.name)
    await tasksPage.btnActive();
    await tasksPage.assertTaskVisible(tasks.name)
  })
});

test.describe('Deletar', () => {
  test('Deletar tarefa selecionada', async ({ }) => {
    const task = data.success as taskModel
    const tasks = data.completed as taskModel

    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.create(tasks);
    await tasksPage.toggle(task.name)
    await tasksPage.btnCompleted();
    await tasksPage.btnClearCompleted();
    await tasksPage.assertNotTaskVisible(false);
  })
});