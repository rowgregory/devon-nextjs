import { NextResponse } from 'next/server'
import prisma from '../../../prisma/client.ts'
import { URL } from 'url'

export async function GET(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  try {
    if (query === 'FETCH_TESTIMONIALS') {
      const testimonials = await prisma.testimonial.findMany()

      return NextResponse.json(
        {
          testimonials
        },
        { status: 200 }
      )
    }

    return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  } catch (err) {
    console.error('Error fetching testimonials: ', err)

    return NextResponse.json(
      {
        message: 'Error fetching testimonials',
        error: err.message
      },
      { status: 500 }
    )
  }
}

export async function PATCH(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  if (query === 'UPDATE_TESTIMONIAL') {
    try {
      const testimonial = await req.json()

      if (!testimonial) {
        return NextResponse.json(
          { message: 'Error updating testimonial' },
          { status: 404 }
        )
      }

      await prisma.testimonial.update({
        where: { id: Number(testimonial.id) },
        data: testimonial
      })

      return NextResponse.json(
        { message: 'Testimonial updated successfully' },
        { status: 200 }
      )
    } catch (err) {
      return NextResponse.json(
        { message: 'Error updating testimonial', err },
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

  if (query === 'CREATE_TESTIMONIAL') {
    try {
      const testimonial = await req.json()

      if (!testimonial) {
        return NextResponse.json(
          { message: 'Error creating testimonial' },
          { status: 400 }
        )
      }

      await prisma.testimonial.create({
        data: testimonial
      })

      return NextResponse.json(
        {
          message: 'Testimonial created successfully'
        },
        { status: 201 }
      )
    } catch (err) {
      console.error('Error creating testimonial: ', err)
      return NextResponse.json(
        { message: 'Error creating testimonial: ', error: err.message },
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

  if (query === 'DELETE_TESTIMONIAL') {
    try {
      if (!id) {
        return NextResponse.json(
          { message: 'Testimonial ID is required' },
          { status: 400 }
        )
      }

      const testimonial = await prisma.testimonial.delete({
        where: { id: parseInt(id, 10) }
      })

      if (!testimonial) {
        return NextResponse.json(
          { message: 'Testimonial not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(
        { message: 'Testimonial deleted successfully' },
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
