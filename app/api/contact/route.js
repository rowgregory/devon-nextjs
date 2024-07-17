import { NextResponse } from 'next/server'
import prisma from '../../../prisma/client.ts'
import { URL } from 'url'

export async function GET(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  try {
    if (query === 'FETCH_CONTACTS') {
      const contacts = await prisma.contact.findMany()

      return NextResponse.json(
        {
          contacts
        },
        { status: 200 }
      )
    }

    return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  } catch (err) {
    console.error('Error fetching contacts: ', err)
    return NextResponse.json(
      {
        message: 'Error fetching contacts',
        error: err.message
      },
      { status: 500 }
    )
  }
}

export async function PATCH(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  if (query === 'UPDATE_CONTACT') {
    try {
      const contact = await req.json()

      if (!contact) {
        return NextResponse.json(
          { message: 'Error updating contact' },
          { status: 404 }
        )
      }

      await prisma.contact.update({
        where: { id: Number(contact.id) },
        data: contact
      })

      return NextResponse.json(
        { message: 'Contact updated successfully' },
        { status: 200 }
      )
    } catch (err) {
      return NextResponse.json(
        { message: 'Error updating contact', err },
        { status: 500 }
      )
    }
  } else {
    return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  }
}

export async function POST(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  if (query === 'CREATE_CONTACT') {
    try {
      const contact = await req.json()

      if (!contact) {
        return NextResponse.json(
          { message: 'Error creating contact' },
          { status: 400 }
        )
      }

      const createdContact = await prisma.contact.create({
        data: contact
      })

      return NextResponse.json(
        {
          message: 'Contact created successfully',
          name: createdContact.name
        },
        { status: 201 }
      )
    } catch (err) {
      console.error('Error creating contact: ', err)
      return NextResponse.json(
        { message: 'Error creating contact: ', error: err.message },
        { status: 500 }
      )
    }
  } else {
    return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  }
}

/**
 * @desc    Delete menu item
 * @route   DELETE /api/product/[id]
 * @access  Public
 */
export async function DELETE(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')
  const id = await req.json()

  if (query === 'DELETE_CONTACT') {
    try {
      if (!id) {
        return NextResponse.json(
          { message: 'Contact ID is required' },
          { status: 400 }
        )
      }

      const contact = await prisma.contact.delete({
        where: { id: parseInt(id, 10) }
      })

      if (!contact) {
        return NextResponse.json(
          { message: 'Contact not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(
        { message: 'Contact deleted successfully' },
        { status: 200 }
      )
    } catch (err) {
      console.error(err.message)
      return NextResponse.json(
        { message: 'Internal server error' },
        { status: 500 }
      )
    }
  } else {
    return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  }
}
